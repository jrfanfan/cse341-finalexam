const express = require('express');
const router = express.Router();
const {ensureAuth, ensureGuest} = require('../midleware/auth');
const { contactValidationRules, validate } = require('../validation/validator')
const dataControllers = require('../controllers/dataControllers');



/**
* @swagger
* components:
*   securitySchemes:
*       oAuthSample:    # <---- arbitrary name
*         type: oauth2
*         description: This API uses OAuth 2 with the implicit grant flow.
*         flows:
*           implicit:   # <---- OAuth flow(authorizationCode, implicit, password or clientCredentials)
*           authorizationUrl: /api-docs/
*           scopes:
*               read_contacts: Read contacts 
*               write_contacts: modify contacts
*   schemas:
*      Contacts:
*          type: object
*          required:
*            - firstname
*            - lastname
*            - email
*            - idnumber
*          properties:
*            firstname:
*               type: string
*            lastname:
*               type: string
*            email:
*               type: string
*            idnumber:
*               type: integer   
*/

/**
* @swagger
* security: 
*  - oAuthSample: 
*    - write_contacts
*    - read_contacts
*/

/**
* @swagger
* /data:
*   post:
*    tags:
*      - Add a New Contact
*    security: 
*       - oAuthSample: 
*           - write_contacts
*           - read_contacts
*    requestBody:
*      required: true
*      content:
*        "application/json":
*           schema:
*                type: array
*                items:
*                  type: object
*                  properties:
*                    firstname:
*                      type: string
*                    lastname:
*                      type: string
*                    email:
*                     type: string
*                    idnumber:
*                      type: integer
*    responses:
*       '201':
*         description: "The contact was successfully created"
*       '400':
*         description: "fail"       
*          
*/

/**
* @swagger
* /data:
*   get:
*    tags:
*     - View Contacts
*    responses:
*       '200':
*         description: "success"
*       '400':
*         description: "fail"
*         content:
*           "application/json":
*               schema:
*                type: array
*                items:
*                  type: object
*                  properties:
*                    firstname:
*                      type: string
*                    lastname:
*                      type: string
*                    email:
*                     type: string
*                    idnumber:
*                      type: integer
*/

/**
* @swagger
* /dataupdate/{id}:
*   put:
*    tags: [UpdateContact]
*    security: 
*       - oAuthSample: 
*           - write_contacts
*           - read_contacts
*    parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*         description: contact id
*    requestBody:
*      required: true
*      content:
*        "application/json":
*           schema:
*                type: array
*                items:
*                  type: object
*                  properties:
*                    firstname:
*                      type: string
*                    lastname:
*                      type: string
*                    email:
*                     type: string
*                    idnumber:
*                      type: integer
*    responses:
*       '200':
*         description: "The contact was successfully updated"
*       '400':
*         description: "fail"       
*/

/**
* @swagger
* /datadel/{id}:
*   delete:
*    tags: [DeleteContact]
*    security: 
*       - oAuthSample: 
*           - write_contacts
*           - read_contacts
*    parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*         description: contact id
*    requestBody:
*      required: true
*      content:
*        "application/json":
*           schema:
*                type: array
*                items:
*                  type: object
*                  properties:
*                    firstname:
*                      type: string
*                    lastname:
*                      type: string
*                    email:
*                     type: string
*                    idnumber:
*                      type: integer
*    responses:
*       '201':
*         description: "The contact was successfully removed"
*       '400':
*         description: "fail"       
*/

//Route add data post
router.post('/data', ensureAuth, contactValidationRules(), validate, dataControllers.postData);

//Route find data get
router.get('/data', ensureAuth, dataControllers.findData);

//Route get data by ip
router.get('/data/:id', ensureAuth, dataControllers.findDataById);

//Route update data by id
router.get('/dataupdate/:id',  ensureAuth, contactValidationRules(), validate, dataControllers.findByIdAndUpdate);
router.put('/dataupdate/:id',  ensureAuth, contactValidationRules(), validate, dataControllers.findByIdAndUpdate);


// Delete data by id
router.get('/datadel/:id', ensureAuth, dataControllers.deleteDataById);



module.exports= router;