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
import { CustomSegmentLoader, ISegmentLoaderArguments, ISegmentLoaderObservable } from "../types";
/**
 * Defines the url for the request, load the right loader (custom/default
 * one).
 */
declare const generateSegmentLoader: (customSegmentLoader?: CustomSegmentLoader | undefined) => ({ segment, representation, adaptation, period, manifest, url, }: ISegmentLoaderArguments) => ISegmentLoaderObservable<ArrayBuffer | Uint8Array | null>;
export default generateSegmentLoader;