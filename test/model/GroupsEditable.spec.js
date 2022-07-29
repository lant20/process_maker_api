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
    instance = new ProcessMakerApi.GroupsEditable();
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

  describe('GroupsEditable', function() {
    it('should create an instance of GroupsEditable', function() {
      // uncomment below and update the code to test GroupsEditable
      //var instane = new ProcessMakerApi.GroupsEditable();
      //expect(instance).to.be.a(ProcessMakerApi.GroupsEditable);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new ProcessMakerApi.GroupsEditable();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new ProcessMakerApi.GroupsEditable();
      //expect(instance).to.be();
    });

    it('should have the property managerId (base name: "manager_id")', function() {
      // uncomment below and update the code to test the property managerId
      //var instance = new ProcessMakerApi.GroupsEditable();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new ProcessMakerApi.GroupsEditable();
      //expect(instance).to.be();
    });

  });

}));
