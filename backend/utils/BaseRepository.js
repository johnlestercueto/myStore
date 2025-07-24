class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    async findAll() {
        return this.model.find(); 
    }

    async findById(id) {
        return this.model.findById(id)
    }

    async findOne(filter) {
        return this.model.findOne(filter)
    }

    async create(data) {
        const item = new this.model(data)
        return item.save();
    }

    async update(id, data) {
        return this.model.findByIdAndUpdate(id, data, { new: true})
    }

    async delete(id) {
        return this.model.findByIdAndDelete(id)
    }
}

module.exports = BaseRepository;