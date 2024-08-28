import Form from '../models/Form.js';


export const saveFormData = async (req, res, next) => {
    try {
      console.log('saveFormData middleware called');
      const form = new Form(req.body);
      const savedData = await form.save();
      req.savedData = savedData;  // Lewatkan data yang disimpan ke middleware berikutnya
      console.log('Data saved, calling next()');
      next();
    } catch (error) {
      console.error('Error saving form data:', error);
      res.status(500).json({ message: "Terjadi kesalahan saat menyimpan data form", error });
    }
  };
  
export const getFormResponses = async (req, res) => {
    try {
        const forms = await Form.findAll();
        res.status(200).json(forms);
    } catch (error) {
        console.error('Error fetching form responses:', error);
        res.status(500).json({ error: 'Failed to fetch form responses' });
    }
};


