module.exports = (Model) => {
  return {
    async create(req, res) {
      try {
        console.log(req.body);
        const item = await Model.create(req.body);
        res.json(item);
      } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: err.message });
      }
    },

    async getAll(req, res) {
      try {
        const items = await Model.findAll();
        res.json(items);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    },

    async getOne(req, res) {
      try {
        const item = await Model.findByPk(req.params.id);
        if (!item) return res.status(404).json({ message: "Not found" });
        res.json(item);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    },

    async update(req, res) {
      try {
        const item = await Model.findByPk(req.params.id);
        if (!item) return res.status(404).json({ message: "Not found" });

        await item.update(req.body);
        res.json(item);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    },

    async remove(req, res) {
      try {
        const item = await Model.findByPk(req.params.id);
        if (!item) return res.status(404).json({ message: "Not found" });

        await item.destroy();
        res.json({ message: "Deleted" });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    },
  };
};
