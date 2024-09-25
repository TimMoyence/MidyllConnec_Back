import expressJSDocSwagger from 'express-jsdoc-swagger';
import * as url from 'node:url';

const dirname = url.fileURLToPath(new URL('..', import.meta.url));

export default (app) => {
  const options = {
    info: {
      version: '1.0.0',
      title: 'Mydill API',
      description: 'An API to stock and manage data for the mydill',
    },
    // Base directory which we use to locate your JSDOC files
    baseDir: dirname,
    // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
    filesPattern: './**/*.js',
    // URL where SwaggerUI will be rendered
    swaggerUIPath: '/api-docs',
    // Expose OpenAPI UI
    exposeSwaggerUI: true,
    // Set non-required fields as nullable by default
    notRequiredAsNullable: false,
  };

  expressJSDocSwagger(app)(options);
};
