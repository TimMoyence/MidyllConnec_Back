import Joi from 'joi';

const registerSchema = Joi.object({
  firstname: Joi.string().min(1).max(255).required(),
  lastname: Joi.string().min(1).max(255).required(),
  email: Joi.string().email().required(),
  address: Joi.string().min(1).max(255),
  password: Joi.string()
    .min(8)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/)
    .required(),
  role: Joi.string().min(1).max(5),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const braceletPostSchema = Joi.object({
  description: Joi.string().min(1).max(1000),
  name: Joi.string().min(1).max(255),
  prix: Joi.number(),
  categorie_id: Joi.number(),
}).min(1);

const avisPostSchema = Joi.object({
  name: Joi.string().min(1).max(1000),
  text: Joi.string().min(1).max(1000),
  rating: Joi.number(),
  admin_validation: Joi.boolean(),
}).min(1);

const bienfaitPostSchema = Joi.object({
  name: Joi.string().min(1).max(1000),
});

const bienfaitLiaisonPostSchema = Joi.object({
  massage_id: Joi.number(),
  bienfait_id: Joi.number(),
  huile_id: Joi.number(),
}).min(2);

const bougiePostSchema = Joi.object({
  name: Joi.string().min(1).max(255),
  prix: Joi.number(),
  categorie_id: Joi.number(),
}).min(1);

const categoriePostSchema = Joi.object({
  name: Joi.string().min(1).max(255).required(),
});

const forfaitPostSchema = Joi.object({
  name: Joi.string().min(1).max(255),
  description: Joi.string().min(10).max(1000),
  temps: Joi.string(),
  prix: Joi.number(),
  categorie_id: Joi.number(),
}).min(1);

const huilePostSchema = Joi.object({
  name: Joi.string().min(1).max(255),
  description: Joi.string().min(10).max(1000),
  quantite: Joi.number(),
  prix: Joi.number(),
  categorie_id: Joi.number(),
}).min(1);

const massagePostSchema = Joi.object({
  name: Joi.string(),
  short_description: Joi.string(),
  title: Joi.string(),
  description: Joi.string(),
  temps: Joi.string(),
  prix: Joi.number(),
  categorie_id: Joi.number(),
  benefits: Joi.array().items(Joi.string()),
}).min(1);

const pierrePostSchema = Joi.object({
  name: Joi.string().min(1).max(255).required(),
});

const pierreLiaisonPostSchema = Joi.object({
  bracelet_id: Joi.number().required(),
  pierre_id: Joi.number().required(),
}).min(2);

const soinPostSchema = Joi.object({
  name: Joi.string().min(1).max(255),
  short_description: Joi.string().min(10).max(1000),
  description: Joi.string().min(10).max(1000),
  temps: Joi.string(),
  prix: Joi.number(),
  categorie_id: Joi.number(),
}).min(1);

const programmePostSchema = Joi.object({
  name: Joi.string().min(1).max(255),
  text: Joi.string().min(10).max(1000),
  value_propositon: Joi.string().min(10).max(1000),
}).min(1);

const contactPostSchema = Joi.object({
  firstname: Joi.string().min(1).max(15).required(),
  lastname: Joi.string().min(1).max(30).required(),
  email: Joi.string().email().required(),
  phone: Joi.string()
    .min(10)
    .pattern(
      /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/,
    )
    .required(),
  message: Joi.string().min(1).max(355).required(),
  agree: Joi.boolean().required(),
}).required();

const visitPostSchema = Joi.object({
  visitName: Joi.string().min(1).max(15),
  numberOfVisit: Joi.number(),
});

export {
  avisPostSchema,
  bienfaitLiaisonPostSchema,
  bienfaitPostSchema,
  bougiePostSchema,
  braceletPostSchema,
  categoriePostSchema,
  contactPostSchema,
  forfaitPostSchema,
  huilePostSchema,
  loginSchema,
  massagePostSchema,
  pierreLiaisonPostSchema,
  pierrePostSchema,
  programmePostSchema,
  registerSchema,
  soinPostSchema,
  visitPostSchema
};

