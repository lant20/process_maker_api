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
import ScreenCategory from './ScreenCategory';

/**
 * The InlineResponse20016 model module.
 * @module model/InlineResponse20016
 * @version 1.0.0
 */
class InlineResponse20016 {
    /**
     * Constructs a new <code>InlineResponse20016</code>.
     * @alias module:model/InlineResponse20016
     */
    constructor() { 
        
        InlineResponse20016.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20016</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20016} obj Optional instance to populate.
     * @return {module:model/InlineResponse20016} The populated <code>InlineResponse20016</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20016();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ScreenCategory]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ApiClient.convertToType(data['meta'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ScreenCategory>} data
 */
InlineResponse20016.prototype['data'] = undefined;

/**
 * @member {Object} meta
 */
InlineResponse20016.prototype['meta'] = undefined;






export default InlineResponse20016;

