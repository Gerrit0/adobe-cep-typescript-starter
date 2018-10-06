import { onClick } from './helpers'

const csInterface = new CSInterface();

onClick('#open-button', openDoc)

function openDoc() {
  csInterface.evalScript("openDocument()");
}
