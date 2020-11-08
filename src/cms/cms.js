import CMS from "netlify-cms-app";

import cloudinary from "netlify-cms-media-library-cloudinary";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";
import EventPostPreview from "./preview-templates/EventPostPreview";
import FocusPagePreview from "./preview-templates/FocusPagePreview";

CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("product", ProductPagePreview);
CMS.registerPreviewTemplate("focus", FocusPagePreview);
CMS.registerPreviewTemplate("event", EventPostPreview);
CMS.registerPreviewTemplate("podcast", EventPostPreview);
