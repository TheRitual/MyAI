import { Impulse } from "./impulse.interface";

export interface SystemModuleFeedback<IncomingData = any> {
  moduleData?: IncomingData;
  positiveImpulse?: Impulse;
  negativeImpulse?: Impulse;
}
