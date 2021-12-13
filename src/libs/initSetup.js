const Rol = require('../../models/rol');

const createRoles = async() => {
  try {
    const count = await Rol.estimatedDocumentCount();

    if(count > 0)return;

    const values = await Promise.all([
      new Rol({ name: "user" }).save(),
      new Rol({ name: "admin" }).save()
    ])

    console.log(values);

  } catch (error) {
    console.log(error);
  }
}

module.exports = createRoles;