import { injectable } from "inversify";
import { Document, Model, Types } from "mongoose";
import {Handler} from "./interfaces/handler";
import {ObservableDataBase} from "./interfaces/observable.data.base";

@injectable()
export class RepositoryBase<T extends Document> implements IRepositoryBase<T> {
    protected _model: Model<T> | any;
    protected _observable: ObservableDataBase = null;
    protected _afterCreated : Array<Handler> = [];
    protected _afterUpdate: Array<Handler> = [];

    async create(item: T): Promise<T> {
        const created =  await this._model.create(item);
        this._observable.created(created)
        this._afterCreated.map(exec => {
            exec.handler(created)
        });
        return created
    }

    afterCreated(handler:Handler) : void {
        this._afterCreated.push(handler)
    }

    afterUpdate(handler:Handler) : void {
        this._afterUpdate.push(handler)
    }

    async delete(_id: string): Promise<void> {
        await this._model.remove({ _id });
    }

    async find(cond: Object): Promise<T[]> {
        return this._model.find(cond);
    }

    async findPaginate(
        cond: Object,
        page: number = 1,
        limit: number = 10
    ): Promise<object> {
        return this._model.paginate(cond, {
            page,
            limit
        });
    }

    async findById(id: string): Promise<T> {
        return this._model.findById(id);
    }

    async findOne(cond: Object): Promise<T> {
        return this._model.findOne(cond);
    }

    async updateById(_id: Types.ObjectId, item: T): Promise<T> {
        const updated = this._model.updateOne({ _id }, item);
        this.execAfterUpdate({ _id });
        return updated
    }

    async updateOne(query, data) {
        const updated =  this._model.updateOne(query,data)
        this.execAfterUpdate(query);
        return updated
    }

    private async execAfterUpdate(query) {
        const doc = await this.findOne(query);
        this._afterUpdate.map(exec => {
            exec.handler(doc)
        });
    }
}

export interface IRepositoryBase<T> {
    find(cond: Object): Promise<T[]>;
    findPaginate(cond: object, page: number, limit: number): Promise<object>;
    findById(id: string): Promise<T>;
    findOne(cond: Object): Promise<T>;
    create(item: T): Promise<T>;
    updateById(_id: Types.ObjectId, item: T): Promise<T>;
    updateOne(query,data)
    delete(_id: string): Promise<void>;
}
