const mongoose = require('mongoose');

const connection = async () => {
  try {
    await mongoose.connect('mongodb://localhost/mymoney', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
  } catch (error) {
    handleError(error);
  }
};

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório";
mongoose.Error.messages.Number.min =
  "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'.";
mongoose.Error.messages.Number.max =
  "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'.";
mongoose.Error.messages.String.enum =
  "O '{VALUE}' informado não é válido para o atributo '{PATH}'.";

module.exports = connection;
