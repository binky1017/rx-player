/**
 * Copyright 2015 CANAL+ Group
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Manifest from "../../../manifest";
import areSameStreamEvents from "./are_same_stream_events";
import { IStreamEventData } from "./types";

/**
 * Refresh local scheduled events list
 */
function getScheduledEvents(currentScheduledEvents: IStreamEventData[],
                            manifest: Manifest): IStreamEventData[] {
  const scheduledEvents: IStreamEventData[] = [];
  const { periods } = manifest;
  for (let i = 0; i < periods.length; i++) {
    const period = periods[i];
    const { streamEvents } = period;
    if (streamEvents !== undefined) {
      streamEvents.forEach(({ start, end, id, data }) => {
        for (let j = 0; j < currentScheduledEvents.length; j++) {
          const currentScheduleEvent = currentScheduledEvents[j];
          if (areSameStreamEvents(currentScheduleEvent, { id, start, end })) {
            scheduledEvents.push(currentScheduleEvent);
            return;
          }
        }

        const newScheduledEvent = { start,
                                    end,
                                    id,
                                    data };
        scheduledEvents.push(newScheduledEvent);
      });
    }
  }
  return scheduledEvents;
}

export default getScheduledEvents;
