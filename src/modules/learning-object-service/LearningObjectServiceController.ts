import { Router } from 'express';
import { Controller } from '../../interfaces/Controller';
import { ChangelogController } from './changelogs/ChangelogController';
import { CollectionController } from './collections/CollectionController';
import { FileManagerController } from './fileManager/FileManagerController';
import { ObjectsController } from './objects/ObjectsController';
import { OutcomesController } from './outcomes/OutcomesController';
import { RelevancyController } from './relevancy/RelevancyController';
import { RevisionsController } from './revisions/RevisionsController';
import { StatsController } from './stats/StatsController';
import { SubmissionsController } from './submissions/SubmissionsController';

export class LearningObjectServiceController implements Controller {
  buildRouter(): Router {
    const router = Router();

    // Routes go here
    router.use(new ChangelogController().buildRouter());
    router.use(new CollectionController().buildRouter());
    router.use(new FileManagerController().buildRouter());
    router.use(new ObjectsController().buildRouter());
    router.use(new OutcomesController().buildRouter());
    router.use(new RevisionsController().buildRouter());
    router.use(new StatsController().buildRouter());
    router.use(new SubmissionsController().buildRouter());
    router.use(new RelevancyController().buildRouter());

    return router;
  }
}
