const client = require("../config/prisma-config")

exports.getAllUsers = async (req, res, next) => {
    //Will return all the users 
    try{
        const users = await client.user.findMany(); 
        res.status(200).json(users);
    } catch(err){
       next(err);
    }
}

exports.createUser = async (req, res, next)=>{
  //will create a user (capital?)

  try {
  const newName = req.body.name;
  const newEmail = req.body.email; 
  const newPosition = req.body.position;
  const newEducation = req.body.education; 
  const newFormerEmployer = req.body.former_employer; 
  const newExperience_in_Trade = req.body.experience_in_the_trade; 
  const newSpecial_Knowledge = req.body.special_knowledge  
  const newHobbies = req.body.hobbies; 
  const newSkills = req.body.skills; 
  const newNetwork_Connection = req.body.network_connections; 
  const newLanguages = req.body.languages; 
  const newSoftware_skills = req.body.software_skills; 
  const newCustomers = req.body.customers; 
  const newProjects = req.body.projects; 
  const newFurther_Training = req.body.further_training; 

  const createdUser = await client.user.create({
      data: { name: newName,
              email: newEmail,
              position: newPosition,
              education: newEducation,
              former_employer: newFormerEmployer, 
              experience_in_the_trade: newExperience_in_Trade,
              special_knowledge: newSpecial_Knowledge,
              hobbies:newHobbies,
              skills: newSkills,
              network_connections: newNetwork_Connection,
              languages: newLanguages,
              software_skills: newSoftware_skills,
              customers: newCustomers,
              projects: newProjects,
              further_training: newFurther_Training
            }
        });
  res.status(200).json(createdUser);
}
  catch (err){
    next(err);
  }

}

exports.updateUser = async (req, res, next)=>{
    //Will update a user 
    try{
        const userId = Number(req.params.userId); 
        const newName = req.body.name;
        const newEmail = req.body.email; 
        const newPosition = req.body.position;
        const newEducation = req.body.education; 
        const newFormerEmployer = req.body.former_employer; 
        const newExperience_in_Trade = req.body.experience_in_the_trade; 
        const newSpecial_Knowledge = req.body.special_knowledge  
        const newHobbies = req.body.hobbies; 
        const newSkills = req.body.skills; 
        const newNetwork_Connection = req.body.network_connections; 
        const newLanguages = req.body.languages; 
        const newSoftware_skills = req.body.software_skills; 
        const newCustomers = req.body.customers; 
        const newProjects = req.body.projects; 
        const newFurther_Training = req.body.further_training; 
        const updatedUser = await client.user.update({
            where: { id: userId },
            data: {name: newName,
                   email: newEmail,
                   position: newPosition,
                   education: newEducation,
                   former_employer: newFormerEmployer, 
                   experience_in_the_trade: newExperience_in_Trade,
                   special_knowledge: newSpecial_Knowledge,
                   hobbies:newHobbies,
                   skills: newSkills,
                   network_connections: newNetwork_Connection,
                   languages: newLanguages,
                   software_skills: newSoftware_skills,
                   customers: newCustomers,
                   projects: newProjects,
                   further_training: newFurther_Training}
        }); 
        res.status(200).json(updatedUser);
    } catch(err){
       next(err);
    }
}


exports.deleteUser = async (req, res, next)=>{
    //Will delete a user 
    try{
        const userId = Number(req.params.userId);
        const deletedUser = await client.user.delete({
            where: {id: userId},
        }); 
        res.status(200).json(deletedUser);
    } catch(err){
       next(err);
    }
}

