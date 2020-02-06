declare module '*';

export type GenericObject = { [key: string]: any };

export type CoreModel = any;

export type PageNode = (Element | ChildNode) & {
    baseName: string;
    localName: string;
    text: string;
};
