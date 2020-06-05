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

export interface IStreamEventPrivateData extends IStreamEventData {
  _shiftedStart: number;
  _shiftedEnd?: number;
}

export interface IStreamEventData {
  id?: string;
  start: number;
  end?: number;
  data: { type: "element";
          value: Element; };
}

interface IStreamEventIn {
  type: "stream-event-in";
  value: IStreamEventData;
}

interface IStreamEventOut {
  type: "stream-event-out";
  value: IStreamEventData;
}

export type IStreamEvent = IStreamEventIn |
                           IStreamEventOut;
