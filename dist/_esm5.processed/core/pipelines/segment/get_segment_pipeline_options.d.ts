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
import { ILoaderDataLoadedValue } from "../../../transports";
import { IContent } from "./create_segment_loader";
export interface ISegmentPipelineLoaderOptions<T> {
    cache?: {
        add: (obj: IContent, arg: ILoaderDataLoadedValue<T>) => void;
        get: (obj: IContent) => ILoaderDataLoadedValue<T>;
    };
    maxRetry: number;
    maxRetryOffline: number;
    initialBackoffDelay: number;
    maximumBackoffDelay: number;
}
/**
 * @param {string} bufferType
 * @param {Object}
 * @returns {Object}
 */
export default function parseSegmentPipelineOptions(bufferType: string, { segmentRetry, offlineRetry, lowLatencyMode }: {
    segmentRetry?: number;
    offlineRetry?: number;
    lowLatencyMode: boolean;
}): ISegmentPipelineLoaderOptions<any>;
