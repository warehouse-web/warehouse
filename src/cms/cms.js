import CMS from "netlify-cms-app";
import React from "react";
import AboutPagePreview from "./preview-templates/AboutPagePreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";
import EventPostPreview from "./preview-templates/EventPostPreview";
import FocusPagePreview from "./preview-templates/FocusPagePreview";

// CMS.registerPreviewStyle("../components/Cms/cms.css");
CMS.registerPreviewTemplate("about", AboutPagePreview);

CMS.registerPreviewTemplate("product", ProductPagePreview);
CMS.registerPreviewTemplate("focus", FocusPagePreview);
CMS.registerPreviewTemplate("event", EventPostPreview);
CMS.registerPreviewTemplate("podcast", EventPostPreview);
