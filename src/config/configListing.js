/////////////////////////////////////////////////////////
// Configurations related to listing.                  //
// Main configuration here is the extended data config //
/////////////////////////////////////////////////////////

// Note: The listingFields come from listingFields asset nowadays by default.
//       To use this built-in configuration, you need to change the overwrite from configHelper.js
//       (E.g. use mergeDefaultTypesAndFieldsForDebugging func)

/**
 * Configuration options for listing fields (custom extended data fields):
 * - key:                           Unique key for the extended data field.
 * - scope (optional):              Scope of the extended data can be 'public', 'private', or 'metadata'.
 *                                  Default value: 'public'.
 *                                  Note: listing doesn't support 'protected' scope atm.
 * - schemaType (optional):         Schema for this extended data field.
 *                                  This is relevant when rendering components and querying listings.
 *                                  Possible values: 'enum', 'multi-enum', 'text', 'long', 'boolean'.
 * - enumOptions (optional):        Options shown for 'enum' and 'multi-enum' extended data.
 *                                  These are used to render options for inputs and filters on
 *                                  EditListingPage, ListingPage, and SearchPage.
 * - listingTypeConfig (optional):  Relationship configuration against listing types.
 *   - limitToListingTypeIds:         Indicator whether this listing field is relevant to a limited set of listing types.
 *   - listingTypeIds:                An array of listing types, for which this custom listing field is
 *                                    relevant and should be added. This is mandatory if limitToListingTypeIds is true.
 * - categoryConfig (optional):     Relationship configuration against categories.
 *   - limitToCategoryIds:            Indicator whether this listing field is relevant to a limited set of categories.
 *   - categoryIds:                   An array of categories, for which this custom listing field is
 *                                    relevant and should be added. This is mandatory if limitToCategoryIds is true.
 * - filterConfig:                  Filter configuration for listings query.
 *    - indexForSearch (optional):    If set as true, it is assumed that the extended data key has
 *                                    search index in place. I.e. the key can be used to filter
 *                                    listing queries (then scope needs to be 'public').
 *                                    Note: Sharetribe CLI can be used to set search index for the key:
 *                                    https://www.sharetribe.com/docs/references/extended-data/#search-schema
 *                                    Read more about filtering listings with public data keys from API Reference:
 *                                    https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
 *                                    Default value: false,
 *   - filterType:                    Sometimes a single schemaType can be rendered with different filter components.
 *                                    For 'enum' schema, filterType can be 'SelectSingleFilter' or 'SelectMultipleFilter'
 *   - label:                         Label for the filter, if the field can be used as query filter
 *   - searchMode (optional):         Search mode for indexed data with multi-enum schema.
 *                                    Possible values: 'has_all' or 'has_any'.
 *   - group:                         SearchPageWithMap has grouped filters. Possible values: 'primary' or 'secondary'.
 * - showConfig:                    Configuration for rendering listing. (How the field should be shown.)
 *   - label:                         Label for the saved data.
 *   - isDetail                       Can be used to hide detail row (of type enum, boolean, or long) from listing page.
 *                                    Default value: true,
 * - saveConfig:                    Configuration for adding and modifying extended data fields.
 *   - label:                         Label for the input field.
 *   - placeholderMessage (optional): Default message for user input.
 *   - isRequired (optional):         Is the field required for providers to fill
 *   - requiredMessage (optional):    Message for those fields, which are mandatory.
 */
export const listingFields = [
  {
    "key": "era",
    "scope": "public",
    "schemaType": "enum",
    "enumOptions": [
      {
        "option": "mighty-morphin",
        "label": "Mighty Morphin (1993-1995)"
      },
      {
        "option": "zeo",
        "label": "Zeo (1996)"
      },
      {
        "option": "turbo",
        "label": "Turbo (1997)"
      },
      {
        "option": "in-space",
        "label": "In Space (1998)"
      },
      {
        "option": "lost-galaxy",
        "label": "Lost Galaxy (1999)"
      },
      {
        "option": "lightspeed-rescue",
        "label": "Lightspeed Rescue (2000)"
      },
      {
        "option": "time-force",
        "label": "Time Force (2001)"
      },
      {
        "option": "wild-force",
        "label": "Wild Force (2002)"
      },
      {
        "option": "ninja-storm",
        "label": "Ninja Storm (2003)"
      },
      {
        "option": "dino-thunder",
        "label": "Dino Thunder (2004)"
      },
      {
        "option": "spd",
        "label": "S.P.D. (2005)"
      },
      {
        "option": "mystic-force",
        "label": "Mystic Force (2006)"
      },
      {
        "option": "operation-overdrive",
        "label": "Operation Overdrive (2007)"
      },
      {
        "option": "jungle-fury",
        "label": "Jungle Fury (2008)"
      },
      {
        "option": "rpm",
        "label": "RPM (2009)"
      },
      {
        "option": "samurai",
        "label": "Samurai / Super Samurai (2011-2012)"
      },
      {
        "option": "megaforce",
        "label": "Megaforce / Super Megaforce (2013-2014)"
      },
      {
        "option": "dino-charge",
        "label": "Dino Charge (2015-2016)"
      },
      {
        "option": "ninja-steel",
        "label": "Ninja Steel (2017-2018)"
      },
      {
        "option": "beast-morphers",
        "label": "Beast Morphers (2019-2020)"
      },
      {
        "option": "dino-fury",
        "label": "Dino Fury (2021-2022)"
      },
      {
        "option": "cosmic-fury",
        "label": "Cosmic Fury (2023)"
      },
      {
        "option": "movies",
        "label": "Movies"
      },
      {
        "option": "multi-series",
        "label": "Multi-series / generic"
      }
    ],
    "filterConfig": {
      "indexForSearch": true,
      "filterType": "SelectSingleFilter",
      "label": "Series / era",
      "group": "primary",
      "showFilter": true
    },
    "showConfig": {
      "label": "Series / era",
      "isDetail": true
    },
    "saveConfig": {
      "label": "Series / era",
      "requiredMessage": "Pick the series this item comes from. Choose Multi-series if it spans several."
    },
    "categoryConfig": {}
  },
  {
    "key": "rangerColor",
    "scope": "public",
    "schemaType": "multi-enum",
    "enumOptions": [
      {
        "option": "red",
        "label": "Red"
      },
      {
        "option": "blue",
        "label": "Blue"
      },
      {
        "option": "black",
        "label": "Black"
      },
      {
        "option": "yellow",
        "label": "Yellow"
      },
      {
        "option": "pink",
        "label": "Pink"
      },
      {
        "option": "green",
        "label": "Green"
      },
      {
        "option": "white",
        "label": "White"
      },
      {
        "option": "gold",
        "label": "Gold"
      },
      {
        "option": "silver",
        "label": "Silver"
      },
      {
        "option": "other",
        "label": "Other / villain"
      },
      {
        "option": "full-team",
        "label": "Full team"
      }
    ],
    "filterConfig": {
      "indexForSearch": true,
      "filterType": "SelectMultipleFilter",
      "label": "Ranger",
      "searchMode": "has_any",
      "group": "primary",
      "showFilter": true
    },
    "showConfig": {
      "label": "Ranger",
      "isDetail": true
    },
    "saveConfig": {
      "label": "Ranger"
    },
    "categoryConfig": {}
  },
  {
    "key": "condition",
    "scope": "public",
    "schemaType": "enum",
    "enumOptions": [
      {
        "option": "mint-sealed",
        "label": "Mint - sealed in original packaging"
      },
      {
        "option": "mint-opened",
        "label": "Mint - opened, complete"
      },
      {
        "option": "excellent",
        "label": "Excellent - light wear"
      },
      {
        "option": "good",
        "label": "Good - visible wear"
      },
      {
        "option": "fair",
        "label": "Fair - significant wear"
      },
      {
        "option": "for-parts",
        "label": "For parts or repair"
      }
    ],
    "filterConfig": {
      "indexForSearch": true,
      "filterType": "SelectSingleFilter",
      "label": "Condition",
      "group": "primary",
      "showFilter": true
    },
    "showConfig": {
      "label": "Condition",
      "isDetail": true
    },
    "saveConfig": {
      "label": "Condition",
      "requiredMessage": "Buyers of second-hand collectibles rely on this, so it is required."
    },
    "categoryConfig": {}
  },
  {
    "key": "completeness",
    "scope": "public",
    "schemaType": "enum",
    "enumOptions": [
      {
        "option": "complete",
        "label": "Complete with all accessories"
      },
      {
        "option": "missing-parts",
        "label": "Missing some accessories"
      },
      {
        "option": "item-only",
        "label": "Item only, no accessories"
      },
      {
        "option": "not-applicable",
        "label": "Not applicable"
      }
    ],
    "filterConfig": {
      "indexForSearch": true,
      "filterType": "SelectSingleFilter",
      "label": "Completeness",
      "group": "secondary",
      "showFilter": true
    },
    "showConfig": {
      "label": "Completeness",
      "isDetail": true
    },
    "saveConfig": {
      "label": "Completeness"
    },
    "categoryConfig": {}
  },
  {
    "key": "manufacturer",
    "scope": "public",
    "schemaType": "enum",
    "enumOptions": [
      {
        "option": "bandai",
        "label": "Bandai"
      },
      {
        "option": "hasbro",
        "label": "Hasbro"
      },
      {
        "option": "playmates",
        "label": "Playmates"
      },
      {
        "option": "funko",
        "label": "Funko"
      },
      {
        "option": "super7",
        "label": "Super7"
      },
      {
        "option": "toynami",
        "label": "Toynami"
      },
      {
        "option": "other",
        "label": "Other"
      },
      {
        "option": "unknown",
        "label": "Unknown"
      }
    ],
    "filterConfig": {
      "indexForSearch": true,
      "filterType": "SelectSingleFilter",
      "label": "Manufacturer",
      "group": "secondary",
      "showFilter": true
    },
    "showConfig": {
      "label": "Manufacturer",
      "isDetail": true
    },
    "saveConfig": {
      "label": "Manufacturer"
    },
    "categoryConfig": {}
  },
  {
    "key": "authenticity",
    "scope": "public",
    "schemaType": "enum",
    "enumOptions": [
      {
        "option": "official",
        "label": "Official licensed merchandise"
      },
      {
        "option": "fan-made",
        "label": "Fan-made / custom"
      },
      {
        "option": "unverified",
        "label": "Unverified"
      }
    ],
    "filterConfig": {
      "indexForSearch": true,
      "filterType": "SelectSingleFilter",
      "label": "Authenticity",
      "group": "secondary",
      "showFilter": true
    },
    "showConfig": {
      "label": "Authenticity",
      "isDetail": true
    },
    "saveConfig": {
      "label": "Authenticity",
      "requiredMessage": "State whether this is official merchandise or a fan-made item."
    },
    "categoryConfig": {}
  },
  {
    "key": "releaseYear",
    "scope": "public",
    "schemaType": "long",
    "filterConfig": {
      "indexForSearch": false,
      "label": "Year released"
    },
    "showConfig": {
      "label": "Year released",
      "isDetail": true
    },
    "saveConfig": {
      "label": "Year released",
      "placeholderMessage": "e.g. 1994"
    },
    "categoryConfig": {}
  }
];

///////////////////////////////////////////////////////////////////////
// Configurations related to listing types and transaction processes //
///////////////////////////////////////////////////////////////////////

// A presets of supported listing configurations
//
// Note 1: The listingTypes come from listingTypes asset nowadays by default.
//         To use this built-in configuration, you need to change the overwrite from configHelper.js
//         (E.g. use mergeDefaultTypesAndFieldsForDebugging func)
// Note 2: transaction type is part of listing type. It defines what transaction process and units
//         are used when transaction is created against a specific listing.

/**
 * Configuration options for listing experience:
 * - listingType:         Unique string. This will be saved to listing's public data on
 *                        EditListingWizard.
 * - label                Label for the listing type. Used as microcopy for options to select
 *                        listing type in EditListingWizard.
 * - transactionType      Set of configurations how this listing type will behave when transaction is
 *                        created.
 *   - process              Transaction process.
 *                          The process must match one of the processes that this client app can handle
 *                          (check src/util/transactions/transaction.js) and the process must also exists in correct
 *                          marketplace environment.
 *   - alias                Valid alias for the aforementioned process. This will be saved to listing's
 *                          public data as transctionProcessAlias and transaction is initiated with this.
 *   - unitType             Unit type is mainly used as pricing unit. This will be saved to
 *                          transaction's protected data.
 *                          Recommendation: don't use same unit types in completely different processes
 *                          ('item' sold should not be priced the same as 'item' booked).
 * - stockType            This is relevant only to listings using default-purchase process.
 *                        If set to 'oneItem', stock management is not showed and the listing is
 *                        considered unique (stock = 1).
 *                        Possible values: 'oneItem', 'multipleItems', 'infiniteOneItem', and 'infiniteMultipleItems'.
 *                        Default: 'multipleItems'.
 * - availabilityType     This is relevant only to listings using default-booking process.
 *                        If set to 'oneSeat', seat management is not showed and the listing is
 *                        considered per person (seat = 1).
 *                        Possible values: 'oneSeat' and 'multipleSeats'.
 *                        Default: 'oneSeat'.
 * - priceVariations      This is relevant only to listings using default-booking process.
 *   - enabled:             If set to true, price variations are enabled.
 *                          Default: false.
 * - defaultListingFields These are tied to transaction processes. Different processes have different flags.
 *                        E.g. default-inquiry can toggle price and location to true/false value to indicate,
 *                        whether price (or location) tab should be shown. If defaultListingFields.price is not
 *                        explicitly set to _false_, price will be shown.
 *                        If the location or pickup is not used, listing won't be returned with location search.
 *                        Use keyword search as main search type if location is not enforced.
 *                        The payoutDetails flag allows provider to bypass setting of payout details.
 *                        Note: customers can't order listings, if provider has not set payout details! Monitor
 *                        providers who have not set payout details and contact them to ensure that they add the details.
 * - transactionFields    You can define an array of custom transaction fields for each listing type. Each transaction field
 *                        should have the following attributes:
 *                        - key (string)
 *                        - label (string)
 *                        - showTo (string, options: 'customer', 'provider'). Option 'provider' is only used for negotiation process.
 *                        - schemaType (string, options: 'enum', 'multi-enum', 'text', 'long', 'boolean', 'youtubeVideoUrl')
 *                        - saveConfig (object, optional,  { required: true })
 *                        - schema specific attributes:
 *                          - numberConfig (object, for schemaType: 'long'): { minimum: number, maximum: number }
 *                          - enumOptions (array, for schemaType: 'enum', 'multi-enum'): [{ label: string, option: string }]
 * - messagingOptions     Options for the messaging experience
 *  - fileAttachments:    - if set to true, uploading file attachments to messages is enabled. Marketplace level access control
 *                          configuration may still disable uploading and downloading files, even if enabled in the listing type.
 */

export const listingTypes = [
  {
    "listingType": "buy-now",
    "label": "Buy it now",
    "transactionType": {
      "process": "default-purchase",
      "alias": "default-purchase/release-1",
      "unitType": "item"
    },
    "stockType": "oneItem",
    "transactionFields": [],
    "messagingOptions": {
      "fileAttachments": false
    },
    "defaultListingFields": {
      "description": true,
      "availability": false,
      "payoutDetails": true,
      "images": true,
      "pickup": true,
      "title": true,
      "files": false,
      "shipping": true,
      "location": true,
      "price": true,
      "stock": true
    }
  },
  {
    "listingType": "open-to-offers",
    "label": "Open to offers",
    "transactionType": {
      "process": "default-negotiation",
      "alias": "default-negotiation/release-1",
      "unitType": "item"
    },
    "negotiationOptions": {
      "customerCounterOffer": true,
      "providerUpdateOffer": true
    },
    "transactionFields": [],
    "stockType": "oneItem",
    "messagingOptions": {
      "fileAttachments": false
    },
    "defaultListingFields": {
      "description": true,
      "availability": false,
      "payoutDetails": true,
      "images": true,
      "pickup": true,
      "title": true,
      "files": false,
      "shipping": true,
      "location": true,
      "price": true,
      "stock": true
    }
  }
];

// SearchPage can enforce listing query to only those listings with valid listingType
// However, it only works if you have set 'enum' type search schema for the public data fields
//   - listingType
//
//  Similar setup could be expanded to 2 other extended data fields:
//   - transactionProcessAlias
//   - unitType
//
// Read More:
// https://www.sharetribe.com/docs/how-to/manage-search-schemas-with-flex-cli/#adding-listing-search-schemas
export const enforceValidListingType = false;
