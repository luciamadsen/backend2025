exports.createPayment = async (req, res) => {
    try {
      const payment = { id: Date.now(), status: 'success', amount: req.body.amount };
      res.status(201).json(payment);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  