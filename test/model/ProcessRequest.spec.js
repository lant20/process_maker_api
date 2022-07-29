/**
 * ProcessMaker API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@processmaker.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ProcessMakerApi);
  }
}(this, function(expect, ProcessMakerApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ProcessMakerApi.ProcessRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ProcessRequest', function() {
    it('should create an instance of ProcessRequest', function() {
      // uncomment below and update the code to test ProcessRequest
      //var instane = new ProcessMakerApi.ProcessRequest();
      //expect(instance).to.be.a(ProcessMakerApi.ProcessRequest);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new ProcessMakerApi.ProcessRequest();
      //expect(instance).to.be();
    });

    it('should have the property processId (base name: "process_id")', function() {
      // uncomment below and update the code to test the property processId
      //var instance = new ProcessMakerApi.ProcessRequest();
      //expect(instance).to.be();
    });

    it('should have the property processCollaborationId (base name: "process_collaboration_id")', function() {
      // uncomment below and update the code to test the property processCollaborationId
      //var instance = new ProcessMakerApi.ProcessRequest();
      //expect(instance).to.be();
    });

    it('should have the property participantId (base name: "participant_id")', function() {
      // uncomment below and update the code to test the property participantId
      //var instance = new ProcessMakerApi.ProcessRequest();
      //expect(instance).to.be();
    });

    it('should have the property processCategoryId (base name: "process_category_id")', function() {
      // uncomment below and update the code to test the property processCategoryId
      //var instance = new ProcessMakerApi.ProcessRequest();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new ProcessMakerApi.ProcessRequest();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new ProcessMakerApi.ProcessRequest();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instance = new ProcessMakerApi.ProcessRequest();
      //expect(instance).to.be();
    });

    it('should have the property participants (base name: "participants")', function() {
      // uncomment below and update the code to test the property participants
      //var instance = new ProcessMakerApi.ProcessRequest();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "user_id")', function() {
      // uncomment below and update the code to test the property userId
      //var instance = new ProcessMakerApi.ProcessRequest();
      //expect(instance).to.be();
    });

    it('should have the property callableId (base name: "callable_id")', function() {
      // uncomment below and update the code to test the property callableId
      //var instance = new ProcessMakerApi.ProcessRequest();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instance = new ProcessMakerApi.ProcessRequest();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new ProcessMakerApi.ProcessRequest();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new ProcessMakerApi.ProcessRequest();
      //expect(instance).to.be();
    });

    it('should have the property process (base name: "process")', function() {
      // uncomment below and update the code to test the property process
      //var instance = new ProcessMakerApi.ProcessRequest();
      //expect(instance).to.be();
    });

  });

}));
