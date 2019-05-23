let query = (model, criteria) => {
    return model.find(criteria);
};

let update = (model, criteria, update) => {
    return model.findOneAndUpdate(criteria, update, { new: true });
};

let remove = (model, criteria) => {
    return model.deleteMany(criteria);
};

let create = (model, newObject) => {
    return (new model(newObject)).save();
}

export {
    query,
    update,
    remove,
    create
}