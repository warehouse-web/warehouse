import CMS from "netlify-cms-app";
import React from "react";
import AboutPagePreview from "./preview-templates/AboutPagePreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";
import EventPostPreview from "./preview-templates/EventPostPreview";

// CMS.registerPreviewStyle("../components/Cms/cms.css");
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("product", ProductPagePreview);

CMS.registerPreviewTemplate("focus", EventPostPreview);
// This one is actually event
CMS.registerPreviewTemplate("event", EventPostPreview);
CMS.registerPreviewTemplate("podcast", EventPostPreview);
