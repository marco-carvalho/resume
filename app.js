import * as angular from "angular";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/scss/font-awesome.scss";

import headerController from "./src/header/controller";
import resumeController from "./src/resume/controller";
import experiencesController from "./src/experiences/controller";
import educationController from "./src/education/controller";
import languagesController from "./src/languages/controller";
import skillsController from "./src/skills/controller";

angular
    .module("app", [])
    .controller("headerController", headerController)
    .controller("resumeController", resumeController)
    .controller("experiencesController", experiencesController)
    .controller("educationController", educationController)
    .controller("languagesController", languagesController)
    .controller("skillsController", skillsController);
