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

import ApiClient from '../ApiClient';

/**
 * The ProcessRequestTokenAllOf model module.
 * @module model/ProcessRequestTokenAllOf
 * @version 1.0.0
 */
class ProcessRequestTokenAllOf {
    /**
     * Constructs a new <code>ProcessRequestTokenAllOf</code>.
     * @alias module:model/ProcessRequestTokenAllOf
     */
    constructor() { 
        
        ProcessRequestTokenAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProcessRequestTokenAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProcessRequestTokenAllOf} obj Optional instance to populate.
     * @return {module:model/ProcessRequestTokenAllOf} The populated <code>ProcessRequestTokenAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProcessRequestTokenAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('process_id')) {
                obj['process_id'] = ApiClient.convertToType(data['process_id'], 'String');
            }
            if (data.hasOwnProperty('process_request_id')) {
                obj['process_request_id'] = ApiClient.convertToType(data['process_request_id'], 'String');
            }
            if (data.hasOwnProperty('element_id')) {
                obj['element_id'] = ApiClient.convertToType(data['element_id'], 'String');
            }
            if (data.hasOwnProperty('element_type')) {
                obj['element_type'] = ApiClient.convertToType(data['element_type'], 'String');
            }
            if (data.hasOwnProperty('element_index')) {
                obj['element_index'] = ApiClient.convertToType(data['element_index'], 'String');
            }
            if (data.hasOwnProperty('element_name')) {
                obj['element_name'] = ApiClient.convertToType(data['element_name'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('initiated_at')) {
                obj['initiated_at'] = ApiClient.convertToType(data['initiated_at'], 'Date');
            }
            if (data.hasOwnProperty('advanceStatus')) {
                obj['advanceStatus'] = ApiClient.convertToType(data['advanceStatus'], 'String');
            }
            if (data.hasOwnProperty('due_notified')) {
                obj['due_notified'] = ApiClient.convertToType(data['due_notified'], 'Number');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], Object);
            }
            if (data.hasOwnProperty('process')) {
                obj['process'] = ApiClient.convertToType(data['process'], Object);
            }
            if (data.hasOwnProperty('process_request')) {
                obj['process_request'] = ApiClient.convertToType(data['process_request'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
ProcessRequestTokenAllOf.prototype['id'] = undefined;

/**
 * @member {String} process_id
 */
ProcessRequestTokenAllOf.prototype['process_id'] = undefined;

/**
 * @member {String} process_request_id
 */
ProcessRequestTokenAllOf.prototype['process_request_id'] = undefined;

/**
 * @member {String} element_id
 */
ProcessRequestTokenAllOf.prototype['element_id'] = undefined;

/**
 * @member {String} element_type
 */
ProcessRequestTokenAllOf.prototype['element_type'] = undefined;

/**
 * @member {String} element_index
 */
ProcessRequestTokenAllOf.prototype['element_index'] = undefined;

/**
 * @member {String} element_name
 */
ProcessRequestTokenAllOf.prototype['element_name'] = undefined;

/**
 * @member {Date} created_at
 */
ProcessRequestTokenAllOf.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
ProcessRequestTokenAllOf.prototype['updated_at'] = undefined;

/**
 * @member {Date} initiated_at
 */
ProcessRequestTokenAllOf.prototype['initiated_at'] = undefined;

/**
 * @member {String} advanceStatus
 */
ProcessRequestTokenAllOf.prototype['advanceStatus'] = undefined;

/**
 * @member {Number} due_notified
 */
ProcessRequestTokenAllOf.prototype['due_notified'] = undefined;

/**
 * @member {Object} user
 */
ProcessRequestTokenAllOf.prototype['user'] = undefined;

/**
 * @member {Object} process
 */
ProcessRequestTokenAllOf.prototype['process'] = undefined;

/**
 * @member {Object} process_request
 */
ProcessRequestTokenAllOf.prototype['process_request'] = undefined;






export default ProcessRequestTokenAllOf;

