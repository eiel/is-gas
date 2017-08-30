// @flow

declare var DocumentApp: any;

export default function(): boolean {
  return typeof(DocumentApp) !== 'undefined';
}
