export interface BaseProp {
  title?: string;
  required?: boolean; // string[];
  description?: string;
  defaultValue?: string | number | boolean | undefined;
  format?: string;

  // Marks the prop as the plugin data type,
  // at runtime, existing value will be passed to this property
  isValueField?: boolean;
}

export type MinimumSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type StringProp = BaseProp & {
  type: 'string';
  minLength?: number;
  maxLength?: number;
};

export type NumberProp = BaseProp & {
  type: 'number';
  minimum?: number;
  maximum?: number;
};

export type IntegerProp = BaseProp & {
  type: 'integer';
  minimum?: number;
  maximum?: number;
};

export type BooleanProp = BaseProp & {
  type: 'boolean';
};

export type ChoiceProp = BaseProp & {
  type: 'string';
  enum: string[];
  showAsRadio?: boolean; // should this be prefixed
  verticalLayout?: boolean; // should this be prefixed
};

export type PropType =
  | StringProp
  | NumberProp
  | IntegerProp
  | BooleanProp
  | ChoiceProp;

export interface StandardProperties {
  // these are helpers to allow consistency in the config panel and functionality
  // configure title of the control
  fieldLabel?: boolean;
  tooltip?: boolean;
  description?: boolean;
  placeholder?: boolean;
  defaultValue?: boolean;
  visibility?: boolean;
  readOnly?: boolean;
  required?: boolean;
  hideConnectedTo?: boolean;
}

export interface NintexPlugin {
  version: string;
  fallbackDisableSubmit: boolean;
  controlName: string;
  description?: string;
  widgetTooltip?: string;
  pluginAuthor?: string;
  pluginVersion?: string;

  iconUrl?: string;
  groupName?: string | { name: string; order: number };
  searchTerms?: string[];

  properties?: {
    [name: string]: PropType | boolean;
  };
  standardProperties?: StandardProperties;
  required?: string[];
  designer?: {
    staticProperties?: string[];
    configurationRules?: string[];
    canvasRestrictions?: {
      hideInToolbar?: boolean;
      minSize?: MinimumSize;
      isFullRow?: boolean;
    };
  };
  events?: string[];
}
