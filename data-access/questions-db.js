module.exports = function makeQuestionsDb({ makeDb }) {
  return {
    dbRandomQuestions,
    findAll,
    findById,
    insert,
    remove,
    update
  }
  async function dbRandomQuestions(random_count) {
    const db = await makeDb()
    let pipeline = 
    [
      { $sample: { size: random_count } }
    ]
    const result = await db.collection('questions').aggregate(pipeline).toArray();
    return result
  }
  async function findAll() {
    const db = await makeDb()
    const result = await db.collection('questions').find({})//TODO?
    return (await result.toArray()).map(({ _id: id, ...found }) => ({
      id,
      ...found
    }))
  }
  async function findById(param_id) {
    const db = await makeDb()
    const result = await db.collection('questions').findOne({ id: param_id }, { '_id': false })
    //const found = await result.toArray()
    //if (found.length === 0) {
    //  return null
    //}
    //const { _id: id, ...info } = found[0] //TODO:
    //return { id, ...info }
    return result
  }
  async function insert({ ...questionInfo }) {
    const db = await makeDb()
    let latestId // TODO: get latest insertions' id and add one.
    _id = latestId
    const result = await db
      .collection('questions')
      .insertOne({ _id, ...questionInfo })
    const { _id: id, ...insertedInfo } = result.ops[0]
    return { id, ...insertedInfo }
  }
  async function update({ id: _id, ...questionInfo }) {
    const db = await makeDb()
    const result = await db
      .collection('questions')
      .updateOne({ _id }, { $set: { ...questionInfo } })
    return result.modifiedCount > 0 ? { id: _id, ...questionInfo } : null
  }
  async function remove({ id: _id }) {
    const db = await makeDb()
    const result = await db.collection('questions').deleteOne({ _id })
    return result.deletedCount
  }
}