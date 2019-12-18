import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import FocusPagePreview from "./preview-templates/FocusPagePreview";
import EventPostPreview from "./preview-templates/EventPostPreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);
CMS.registerPreviewStyle("../components/Cms/cms.css");
CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("product", ProductPagePreview);
CMS.registerPreviewTemplate("blog", EventPostPreview);
CMS.registerPreviewTemplate("podcast", EventPostPreview);
CMS.registerPreviewTemplate("focus", FocusPagePreview);
