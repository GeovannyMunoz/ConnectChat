import { Router } from "express";
import { createBullBoard } from "@bull-board/api";
import { ExpressAdapter } from "@bull-board/express";
import { BullAdapter } from '@bull-board/api/bullAdapter';

import isAuth from "../middleware/isAuth";
import { messageQueue, sendScheduledMessages, campaignQueue } from "../queues";

const bullBoardRoutes  = Router();

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath("/admin/queues");

createBullBoard({
  queues: [
    new BullAdapter(messageQueue),
    new BullAdapter(sendScheduledMessages),
    new BullAdapter(campaignQueue),
  ],
  serverAdapter,
});

bullBoardRoutes.use("/admin/queues", serverAdapter.getRouter());

export default bullBoardRoutes;