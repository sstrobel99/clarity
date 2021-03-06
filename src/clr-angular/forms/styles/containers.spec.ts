/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {TestBed} from "@angular/core/testing";
import {itIgnore} from "../../../../tests/tests.helpers";

import {ClrIconModule} from "../../icon/icon.module";

@Component({
    template: `
<form class="clr-form clr-form-{{layout}}">
    <div class="clr-form-control" [ngClass]="{row: grid}" id="text">
        <label for="{{layout}}-basic" class="clr-control-label" [ngClass]="{'col-xs-12': grid, 'col-md-2': grid && layout !== 'vertical'}">
            Basic input
        </label>
        <div class="clr-control-container" [ngClass]="{'col-xs-12': grid, 'col-md-10': grid && layout !== 'vertical'}">
            <div class="clr-input-wrapper">
                <input type="text" id="{{layout}}-basic" placeholder="Enter value here" class="clr-input">
                <clr-icon class="clr-validate-icon" shape="exclamation-circle"></clr-icon>
            </div>
            <span class="clr-subtext">Helper Text</span>
        </div>
    </div>

    <div class="clr-form-control" [ngClass]="{row: grid}" id="checkbox">
        <label class="clr-control-label" [ngClass]="{'col-xs-12': grid, 'col-md-2': grid && layout !== 'vertical'}">
            Basic checkbox</label>
        <div class="clr-control-container" [ngClass]="{'col-xs-12': grid, 'col-md-10': grid && layout !== 'vertical'}">
            <div class="clr-checkbox-wrapper">
                <input type="checkbox" name="checkbox1" id="{{layout}}-checkbox1" placeholder="Enter value here" class="clr-checkbox"> 
                <label for="{{layout}}-checkbox1" class="clr-control-label">
                    option 1
                </label>
                <input type="checkbox" name="checkbox2" id="{{layout}}-checkbox2" placeholder="Enter value here" class="clr-checkbox"> 
                <label for="{{layout}}-checkbox2" class="clr-control-label">
                    option 2
                </label>
                <input type="checkbox" name="checkbox3" id="{{layout}}-checkbox3" placeholder="Enter value here" class="clr-checkbox"> 
                <label for="{{layout}}-checkbox3" class="clr-control-label">
                    option 3
                </label>
            </div>
            <!-- IMPORTANT DIFFERENCE IN STRUCTURE! ICON IS NOT PART OF THE INPUT WRAPPER -->
            <clr-icon class="clr-validate-icon" shape="exclamation-circle"></clr-icon>
            <span class="clr-subtext">Helper Text</span>
        </div>
    </div>
    
    <div class="clr-form-control" [ngClass]="{row: grid}" id="checkbox-inline">
        <label class="clr-control-label" [ngClass]="{'col-xs-12': grid, 'col-md-2': grid && layout !== 'vertical'}">
            Inline checkbox</label>
        <div class="clr-control-container" [ngClass]="{'col-xs-12': grid, 'col-md-10': grid && layout !== 'vertical'}">
            <div class="clr-checkbox-wrapper clr-checkbox-inline">
                <input type="checkbox" name="checkbox7" id="{{layout}}-checkbox7" placeholder="Enter value here" class="clr-checkbox"> 
                <label for="{{layout}}-checkbox7" class="clr-control-label">
                    option 1
                </label>
                <input type="checkbox" name="checkbox8" id="{{layout}}-checkbox8" placeholder="Enter value here" class="clr-checkbox"> 
                <label for="{{layout}}-checkbox8" class="clr-control-label">
                    option 2
                </label>
                <input type="checkbox" name="checkbox9" id="{{layout}}-checkbox9" placeholder="Enter value here" class="clr-checkbox"> 
                <label for="{{layout}}-checkbox9" class="clr-control-label">
                    option 3
                </label>
            </div>
            <!-- IMPORTANT DIFFERENCE IN STRUCTURE! ICON IS NOT PART OF THE INPUT WRAPPER -->
            <clr-icon class="clr-validate-icon" shape="exclamation-circle"></clr-icon>
            <span class="clr-subtext">Helper Text</span>
        </div>
    </div>

    <div class="clr-form-control" [ngClass]="{row: grid}" id="radio">
        <label class="clr-control-label" [ngClass]="{'col-xs-12': grid, 'col-md-2': grid && layout !== 'vertical'}">
            Basic radio</label>
        <div class="clr-control-container" [ngClass]="{'col-xs-12': grid, 'col-md-10': grid && layout !== 'vertical'}">
            <div class="clr-radio-wrapper">
                <input type="radio" name="radio1" id="{{layout}}-radio1" placeholder="Enter value here" class="clr-radio"> 
                <label for="{{layout}}-radio1" class="clr-control-label">option 1</label>
                <input type="radio" name="radio1" id="{{layout}}-radio2" placeholder="Enter value here" class="clr-radio"> 
                <label for="{{layout}}-radio2" class="clr-control-label">option 2</label>
                <input type="radio" name="radio1" id="{{layout}}-radio3" placeholder="Enter value here" class="clr-radio"> 
                <label for="{{layout}}-radio3" class="clr-control-label">option 3</label>
            </div>
            <!-- IMPORTANT DIFFERENCE IN STRUCTURE! ICON IS NOT PART OF THE INPUT WRAPPER -->
            <clr-icon class="clr-validate-icon" shape="exclamation-circle"></clr-icon>
            <span class="clr-subtext">Helper Text</span>
        </div>
    </div>

    <div class="clr-form-control" [ngClass]="{row: grid}" id="radio-inline">
        <label class="clr-control-label" [ngClass]="{'col-xs-12': grid, 'col-md-2': grid && layout !== 'vertical'}">
            Inline radio</label>
        <div class="clr-control-container" [ngClass]="{'col-xs-12': grid, 'col-md-10': grid && layout !== 'vertical'}">
            <div class="clr-radio-wrapper clr-radio-inline">
                <input type="radio" name="radio2" id="{{layout}}-radio4" placeholder="Enter value here" class="clr-radio"> 
                <label for="{{layout}}-radio4" class="clr-control-label">option 1</label>
                <input type="radio" name="radio2" id="{{layout}}-radio5" placeholder="Enter value here" class="clr-radio"> 
                <label for="{{layout}}-radio5" class="clr-control-label">option 2</label>
                <input type="radio" name="radio2" id="{{layout}}-radio6" placeholder="Enter value here" class="clr-radio"> 
                <label for="{{layout}}-radio6" class="clr-control-label">option 3</label>
            </div>
            <!-- IMPORTANT DIFFERENCE IN STRUCTURE! ICON IS NOT PART OF THE INPUT WRAPPER -->
            <clr-icon class="clr-validate-icon" shape="exclamation-circle"></clr-icon>
            <span class="clr-subtext">Helper Text</span>
        </div>
    </div>

    <div class="clr-form-control" [ngClass]="{row: grid}" id="file">
        <label for="{{layout}}-file" class="clr-control-label" [ngClass]="{'col-xs-12': grid, 'col-md-2': grid && layout !== 'vertical'}">
            Basic file</label>
        <div class="clr-control-container" [ngClass]="{'col-xs-12': grid, 'col-md-10': grid && layout !== 'vertical'}">
            <div class="clr-file-wrapper">
                <label for="{{layout}}-file" class="clr-control-label"><span class="btn btn-sm">browse</span></label>
                <input #fileInput type="file" id="{{layout}}-file" placeholder="Enter value here" class="clr-file">
            </div>
            <!-- IMPORTANT DIFFERENCE IN STRUCTURE! ICON IS NOT PART OF THE INPUT WRAPPER -->
            <clr-icon class="clr-validate-icon" shape="exclamation-circle"></clr-icon>
            <span class="clr-subtext">Helper Text</span>
        </div>
    </div>

    <div class="clr-form-control" [ngClass]="{row: grid}" id="file-plain">
        <label for="{{layout}}-file3" class="clr-control-label" [ngClass]="{'col-xs-12': grid, 'col-md-2': grid && layout !== 'vertical'}">
            Plain file</label>
        <div class="clr-control-container" [ngClass]="{'col-xs-12': grid, 'col-md-10': grid && layout !== 'vertical'}">
            <div class="clr-file-wrapper">
                <input type="file" id="{{layout}}-file" placeholder="Enter value here">
            </div>
            <!-- IMPORTANT DIFFERENCE IN STRUCTURE! ICON IS NOT PART OF THE INPUT WRAPPER -->
            <clr-icon class="clr-validate-icon" shape="exclamation-circle"></clr-icon>
            <span class="clr-subtext">Helper Text</span>
        </div>
    </div>

    <div class="clr-form-control" [ngClass]="{row: grid}" id="textarea">
        <label for="{{layout}}-textarea-basic" class="clr-control-label" [ngClass]="{'col-xs-12': grid, 'col-md-2': grid && layout !== 'vertical'}">
            Basic textarea</label>
        <div class="clr-control-container" [ngClass]="{'col-xs-12': grid, 'col-md-10': grid && layout !== 'vertical'}">
            <div class="clr-textarea-wrapper">
                <textarea id="{{layout}}-textarea-basic" rows="5" placeholder="Enter value here" class="clr-textarea"></textarea>
                <clr-icon class="clr-validate-icon" shape="exclamation-circle"></clr-icon>
            </div>
            <span class="clr-subtext">Helper Text</span>
        </div>
    </div>

    <div class="clr-form-control" [ngClass]="{row: grid}" id="select">
        <label class="clr-control-label" [ngClass]="{'col-xs-12': grid, 'col-md-2': grid && layout !== 'vertical'}">
            Basic select</label>
        <div class="clr-control-container" [ngClass]="{'col-xs-12': grid, 'col-md-10': grid && layout !== 'vertical'}">
            <div class="clr-select-wrapper">
                <select>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
                <clr-icon class="clr-validate-icon" shape="exclamation-circle"></clr-icon>
            </div>
            <span class="clr-subtext">Helper Text</span>
        </div>
    </div>

    <div class="clr-form-control" [ngClass]="{row: grid}" id="multiselect">
        <label class="clr-control-label" [ngClass]="{'col-xs-12': grid, 'col-md-2': grid && layout !== 'vertical'}">
            Basic multiselect
        </label>
        <div class="clr-control-container" [ngClass]="{'col-xs-12': grid, 'col-md-10': grid && layout !== 'vertical'}">
            <div class="clr-multiselect-wrapper">
                <select multiple>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
                <clr-icon class="clr-validate-icon" shape="exclamation-circle"></clr-icon>
            </div>
            <span class="clr-subtext">Helper Text</span>
        </div>
    </div>
</form>`
})
class SimpleTest {
    layout = "vertical";
    grid = false;
}

describe("Form layouts", () => {
    const base = 6;
    let native, instance, fixture;

    beforeAll(() => {
        console.log(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`);
    });

    function height(selector) {
        return native.querySelector(selector).getBoundingClientRect().height;
    }

    function verifyHeight(selector: string, value: number, verticalRhythm = true) {
        const computed = height(selector);
        expect(Math.round(computed)).toEqual(Math.round(value));
        if (verticalRhythm) {
            expect(value % 6).toEqual(0);
        }
    }

    /**
     * @TODO Add tests to calculate widths as well
     */

    function verticalTests() {
        describe("text", () => {
            it("control height", () => verifyHeight("#text", base * 10));                    // 229.34
            it("label height", () => verifyHeight("#text .clr-control-label", base * 3));    // 24
            it("wrapper height", () => verifyHeight("#text .clr-input-wrapper", base * 4));  // 181.34
            it("input height", () => verifyHeight("#text .clr-input", base * 4));            // 20.12
            it("subtext height", () => verifyHeight("#text .clr-subtext", base * 2));        // 24
        });

        describe("checkbox", () => {
            it("control height", () => verifyHeight("#checkbox", base * 19));
            it("label height", () => verifyHeight("#checkbox .clr-control-label", base * 3));
            it("wrapper height", () => verifyHeight("#checkbox .clr-checkbox-wrapper", base * 12));
            it("checkbox height", () => verifyHeight("#checkbox .clr-checkbox", 16, false));
            it("checkbox label height",
               () => verifyHeight("#checkbox .clr-checkbox-wrapper .clr-control-label", base * 4));
            it("subtext height", () => verifyHeight("#checkbox .clr-subtext", base * 2));
        });

        describe("checkbox inline", () => {
            xit("control height", () => verifyHeight("#checkbox-inline", base * 12));
            it("label height", () => verifyHeight("#checkbox-inline .clr-control-label", base * 3));
            xit("wrapper height", () => verifyHeight("#checkbox-inline .clr-checkbox-wrapper", base * 5));
            it("checkbox height", () => verifyHeight("#checkbox-inline .clr-checkbox", 16, false));
            xit("checkbox label height",
                () => verifyHeight("#checkbox-inline .clr-checkbox-wrapper .clr-control-label", base * 4));
            it("subtext height", () => verifyHeight("#checkbox-inline .clr-subtext", base * 2));
        });

        describe("radio", () => {
            it("control height", () => verifyHeight("#radio", base * 19));
            it("label height", () => verifyHeight("#radio .clr-control-label", base * 3));
            it("wrapper height", () => verifyHeight("#radio .clr-radio-wrapper", base * 12));
            it("radio height", () => verifyHeight("#radio .clr-radio", 16, false));
            it("radio label height", () => verifyHeight("#radio .clr-radio-wrapper .clr-control-label", base * 4));
            it("subtext height", () => verifyHeight("#radio .clr-subtext", base * 2));
        });

        describe("radio inline", () => {
            xit("control height", () => verifyHeight("#radio-inline", base * 12));
            it("label height", () => verifyHeight("#radio-inline .clr-control-label", base * 3));
            xit("wrapper height", () => verifyHeight("#radio-inline .clr-radio-wrapper", base * 5));
            it("radio height", () => verifyHeight("#radio-inline .clr-radio", 16, false));
            xit("radio label height",
                () => verifyHeight("#radio-inline .clr-radio-wrapper .clr-control-label", base * 4));
            it("subtext height", () => verifyHeight("#radio-inline .clr-subtext", base * 2));
        });

        describe("file", () => {
            it("control height", () => verifyHeight("#file", base * 12));
            it("label height", () => verifyHeight("#file .clr-control-label", base * 3));
            it("wrapper height", () => verifyHeight("#file .clr-file-wrapper", base * 4));
            it("file height", () => verifyHeight("#file .clr-file", 0));
            it("file label height", () => verifyHeight("#file .clr-file-wrapper .clr-control-label", base * 4));
            it("subtext height", () => verifyHeight("#file .clr-subtext", base * 2));
        });

        describe("file plain", () => {
            let fileInput;
            beforeEach(() => {
                fileInput = height("#file-plain input");
            });
            // @TODO Figure out why IE calculates inputs differently
            itIgnore(["ie"], "control height", () => verifyHeight("#file-plain", fileInput + base * 8, false));
            it("label height", () => verifyHeight("#file-plain .clr-control-label", base * 3));
            itIgnore(["ie"], "wrapper height", () => verifyHeight("#file-plain .clr-file-wrapper", fileInput, false));
            it("subtext height", () => verifyHeight("#file-plain .clr-subtext", base * 2));
        });

        describe("textarea", () => {
            // @TODO Figure out why IE can't calculate things normally
            itIgnore(["ie"], "control height", () => verifyHeight("#textarea", base * 30));
            it("label height", () => verifyHeight("#textarea .clr-control-label", base * 3));
            itIgnore(["ie"], "wrapper height", () => verifyHeight("#textarea .clr-textarea-wrapper", base * 23));
            itIgnore(["ie"], "textarea height", () => verifyHeight("#textarea .clr-textarea", base * 23));
            it("subtext height", () => verifyHeight("#textarea .clr-subtext", base * 2));
        });

        describe("select", () => {
            // Skip IE because it calculates something oddly
            // @TODO figure out why IE adds some pixels
            itIgnore(["ie"], "control height", () => verifyHeight("#select", base * 10));
            it("label height", () => verifyHeight("#select .clr-control-label", base * 3));
            it("wrapper height", () => verifyHeight("#select .clr-select-wrapper", base * 4));
            it("select height", () => verifyHeight("#select select", base * 4));
            it("subtext height", () => verifyHeight("#select .clr-subtext", base * 2));
        });

        // For reasons yet unknown, a multiselect has additional height added to it, and different browsers append
        // different amounts of height. This also interferes with vertical rhythm.
        // @TODO See if it is possible or worth fixing vertical rhythm
        describe("multiselect", () => {
            let multiselect;
            beforeEach(() => {
                multiselect = height("#multiselect select");
            });
            it("control height", () => verifyHeight("#multiselect", multiselect + base * 7, false));
            it("label height", () => verifyHeight("#multiselect .clr-control-label", base * 3));
            it("wrapper height", () => verifyHeight("#multiselect .clr-multiselect-wrapper", multiselect, false));
            it("select height", () => verifyHeight("#multiselect select", multiselect, false));
            it("subtext height", () => verifyHeight("#multiselect .clr-subtext", base * 2));
        });
    }

    function horizontalTests() {
        describe("text", () => {
            it("control height", () => verifyHeight("#text", base * 7));
            it("label height", () => verifyHeight("#text .clr-control-label", base * 3));
            it("wrapper height", () => verifyHeight("#text .clr-input-wrapper", base * 4));
            it("input height", () => verifyHeight("#text .clr-input", base * 4));
            it("subtext height", () => verifyHeight("#text .clr-subtext", base * 2));
        });

        describe("checkbox", () => {
            it("control height", () => verifyHeight("#checkbox", base * 16));
            it("label height", () => verifyHeight("#checkbox .clr-control-label", base * 3));
            it("wrapper height", () => verifyHeight("#checkbox .clr-checkbox-wrapper", base * 12));
            it("checkbox height", () => verifyHeight("#checkbox .clr-checkbox", 16, false));
            it("checkbox label height",
               () => verifyHeight("#checkbox .clr-checkbox-wrapper .clr-control-label", base * 4));
            it("subtext height", () => verifyHeight("#checkbox .clr-subtext", base * 2));
        });

        describe("checkbox inline", () => {
            xit("control height", () => verifyHeight("#checkbox-inline", base * 8));
            it("label height", () => verifyHeight("#checkbox-inline .clr-control-label", base * 3));
            xit("wrapper height", () => verifyHeight("#checkbox-inline .clr-checkbox-wrapper", base * 4));
            it("checkbox height", () => verifyHeight("#checkbox-inline .clr-checkbox", 16, false));
            it("checkbox label height",
               () => verifyHeight("#checkbox-inline .clr-checkbox-wrapper .clr-control-label", base * 4));
            it("subtext height", () => verifyHeight("#checkbox-inline .clr-subtext", base * 2));
        });

        describe("radio", () => {
            it("control height", () => verifyHeight("#radio", base * 16));
            it("label height", () => verifyHeight("#radio .clr-control-label", base * 3));
            it("wrapper height", () => verifyHeight("#radio .clr-radio-wrapper", base * 12));
            it("radio height", () => verifyHeight("#radio .clr-radio", 16, false));
            it("radio label height", () => verifyHeight("#radio .clr-radio-wrapper .clr-control-label", base * 4));
            it("subtext height", () => verifyHeight("#radio .clr-subtext", base * 2));
        });

        describe("radio inline", () => {
            xit("control height", () => verifyHeight("#radio-inline", base * 8));
            it("label height", () => verifyHeight("#radio-inline .clr-control-label", base * 3));
            xit("wrapper height", () => verifyHeight("#radio-inline .clr-radio-wrapper", base * 4));
            it("radio height", () => verifyHeight("#radio-inline .clr-radio", 16, false));
            it("radio label height",
               () => verifyHeight("#radio-inline .clr-radio-wrapper .clr-control-label", base * 4));
            it("subtext height", () => verifyHeight("#radio-inline .clr-subtext", base * 2));
        });

        describe("file", () => {
            it("control height", () => verifyHeight("#file", base * 9));
            it("label height", () => verifyHeight("#file .clr-control-label", base * 3));
            it("wrapper height", () => verifyHeight("#file .clr-file-wrapper", base * 4));
            it("file height", () => verifyHeight("#file .clr-file", 0));
            it("file label height", () => verifyHeight("#file .clr-file-wrapper .clr-control-label", base * 4));
            it("subtext height", () => verifyHeight("#file .clr-subtext", base * 2));
        });

        describe("file plain", () => {
            let fileInput;
            beforeEach(() => {
                fileInput = height("#file-plain input");
            });
            // @TODO Figure out IE calculations
            itIgnore(["ie"], "control height", () => verifyHeight("#file-plain", fileInput + base * 5, false));
            it("label height", () => verifyHeight("#file-plain .clr-control-label", base * 3, false));
            itIgnore(["ie"], "wrapper height", () => verifyHeight("#file-plain .clr-file-wrapper", fileInput, false));
            it("subtext height", () => verifyHeight("#file-plain .clr-subtext", base * 2));
        });

        describe("textarea", () => {
            // @TODO Figure out IE calculations
            itIgnore(["ie"], "control height", () => verifyHeight("#textarea", base * 27));
            it("label height", () => verifyHeight("#textarea .clr-control-label", base * 3));
            itIgnore(["ie"], "wrapper height", () => verifyHeight("#textarea .clr-textarea-wrapper", base * 23));
            itIgnore(["ie"], "textarea height", () => verifyHeight("#textarea .clr-textarea", base * 23));
            it("subtext height", () => verifyHeight("#textarea .clr-subtext", base * 2));
        });

        describe("select", () => {
            it("control height", () => verifyHeight("#select", base * 7));
            it("label height", () => verifyHeight("#select .clr-control-label", base * 3));
            it("wrapper height", () => verifyHeight("#select .clr-select-wrapper", base * 4));
            it("select height", () => verifyHeight("#select select", base * 4));
            it("subtext height", () => verifyHeight("#select .clr-subtext", base * 2));
        });

        describe("multiselect", () => {
            let multiselect;
            beforeEach(() => {
                multiselect = height("#multiselect select");
            });
            it("control height", () => verifyHeight("#multiselect", multiselect + base * 4, false));
            it("label height", () => verifyHeight("#multiselect .clr-control-label", base * 3, false));
            it("wrapper height", () => verifyHeight("#multiselect .clr-multiselect-wrapper", multiselect, false));
            it("select height", () => verifyHeight("#multiselect select", multiselect, false));
            it("subtext height", () => verifyHeight("#multiselect .clr-subtext", base * 2));
        });
    }

    function compactTests() {
        // With compact, the subtext is 18px tall (12px line height, 6px margin-top), but if the
        // subtext wraps it would be taller.
        describe("text", () => {
            it("control height", () => verifyHeight("#text", base * 4));
            it("label height", () => verifyHeight("#text .clr-control-label", base * 3));
            it("wrapper height", () => verifyHeight("#text .clr-input-wrapper", base * 4));
            it("input height", () => verifyHeight("#text .clr-input", base * 4));
            it("subtext height", () => verifyHeight("#text .clr-subtext", base * 3));
        });

        describe("checkbox", () => {
            it("control height", () => verifyHeight("#checkbox", base * 4));
            it("label height", () => verifyHeight("#checkbox .clr-control-label", base * 3));
            it("wrapper height", () => verifyHeight("#checkbox .clr-checkbox-wrapper", base * 4));
            it("checkbox height", () => verifyHeight("#checkbox .clr-checkbox", 16, false));
            it("checkbox label height",
               () => verifyHeight("#checkbox .clr-checkbox-wrapper .clr-control-label", base * 4));
            it("subtext height", () => verifyHeight("#checkbox .clr-subtext", base * 3));
        });

        describe("checkbox inline", () => {
            it("control height", () => verifyHeight("#checkbox-inline", base * 4));
            it("label height", () => verifyHeight("#checkbox-inline .clr-control-label", base * 3));
            it("wrapper height", () => verifyHeight("#checkbox-inline .clr-checkbox-wrapper", base * 4));
            it("checkbox height", () => verifyHeight("#checkbox-inline .clr-checkbox", 16, false));
            it("checkbox label height",
               () => verifyHeight("#checkbox-inline .clr-checkbox-wrapper .clr-control-label", base * 4));
            it("subtext height", () => verifyHeight("#checkbox-inline .clr-subtext", base * 3));
        });

        describe("radio", () => {
            it("control height", () => verifyHeight("#radio", base * 4));
            it("label height", () => verifyHeight("#radio .clr-control-label", base * 3));
            it("wrapper height", () => verifyHeight("#radio .clr-radio-wrapper", base * 4));
            it("radio height", () => verifyHeight("#radio .clr-radio", 16, false));
            it("radio label height", () => verifyHeight("#radio .clr-radio-wrapper .clr-control-label", base * 4));
            it("subtext height", () => verifyHeight("#radio .clr-subtext", base * 3));
        });

        describe("radio inline", () => {
            it("control height", () => verifyHeight("#radio-inline", base * 4));
            it("label height", () => verifyHeight("#radio-inline .clr-control-label", base * 3));
            it("wrapper height", () => verifyHeight("#radio-inline .clr-radio-wrapper", base * 4));
            it("radio height", () => verifyHeight("#radio-inline .clr-radio", 16, false));
            it("radio label height",
               () => verifyHeight("#radio-inline .clr-radio-wrapper .clr-control-label", base * 4));
            it("subtext height", () => verifyHeight("#radio-inline .clr-subtext", base * 3));
        });

        describe("file", () => {
            it("control height", () => verifyHeight("#file", base * 4));
            it("label height", () => verifyHeight("#file .clr-control-label", base * 3));
            it("wrapper height", () => verifyHeight("#file .clr-file-wrapper", base * 4));
            it("file height", () => verifyHeight("#file .clr-file", 0));
            it("file label height", () => verifyHeight("#file .clr-file-wrapper .clr-control-label", base * 4));
            it("subtext height", () => verifyHeight("#file .clr-subtext", base * 4));
        });

        describe("file plain", () => {
            let fileInput;
            beforeEach(() => {
                // the default file input is out of our control, so need to get its size for calculations
                fileInput = height("#file-plain input");
            });
            // @TODO Figure out why IE calculates differently
            itIgnore(["ie"], "control height", () => verifyHeight("#file-plain", fileInput, false));
            it("label height", () => verifyHeight("#file-plain .clr-control-label", base * 3, false));
            itIgnore(["ie"], "wrapper height", () => verifyHeight("#file-plain .clr-file-wrapper", fileInput, false));
            itIgnore(["ie"], "subtext height", () => verifyHeight("#file-plain .clr-subtext", fileInput, false));
        });

        describe("textarea", () => {
            // @TODO Figure out why IE calculates differently
            itIgnore(["ie"], "control height", () => verifyHeight("#textarea", base * 23));
            it("label height", () => verifyHeight("#textarea .clr-control-label", base * 3));
            itIgnore(["ie"], "wrapper height", () => verifyHeight("#textarea .clr-textarea-wrapper", base * 23));
            itIgnore(["ie"], "textarea height", () => verifyHeight("#textarea .clr-textarea", base * 23));
            itIgnore(["ie"], "subtext height", () => verifyHeight("#textarea .clr-subtext", base * 22));
        });

        describe("select", () => {
            it("control height", () => verifyHeight("#select", base * 4));
            it("label height", () => verifyHeight("#select .clr-control-label", base * 3));
            it("wrapper height", () => verifyHeight("#select .clr-select-wrapper", base * 4));
            it("select height", () => verifyHeight("#select select", base * 4));
            it("subtext height", () => verifyHeight("#select .clr-subtext", base * 3));
        });

        describe("multiselect", () => {
            let multiselect;
            beforeEach(() => {
                multiselect = height("#multiselect select");
            });
            it("control height", () => verifyHeight("#multiselect", multiselect, false));
            it("label height", () => verifyHeight("#multiselect .clr-control-label", base * 3, false));
            // @TODO Figure out IE calculations
            itIgnore(["ie"], "wrapper height",
                     () => verifyHeight("#multiselect .clr-multiselect-wrapper", multiselect, false));
            it("select height", () => verifyHeight("#multiselect select", multiselect, false));
            itIgnore(["ie"], "subtext height",
                     () => verifyHeight("#multiselect .clr-subtext", multiselect - base, false));
        });
    }

    beforeEach(() => {
        TestBed.configureTestingModule({imports: [ClrIconModule], declarations: [SimpleTest]});
        fixture = TestBed.createComponent(SimpleTest);
        instance = fixture.debugElement.componentInstance;
        native = fixture.debugElement.nativeElement;
        fixture.detectChanges();
    });

    describe("Vertical", () => {
        verticalTests();
    });

    // @TODO Enable grid tests when new grid is setup
    // describe("Vertical with Grid", () => {
    //     beforeEach(() => {
    //         instance.grid = true;
    //         fixture.detectChanges();
    //     });
    //     verticalTests();
    // });

    describe("Horizontal", () => {
        beforeEach(() => {
            instance.layout = "horizontal";
            fixture.detectChanges();
        });
        horizontalTests();
    });

    // describe("Horizontal with Grid", () => {
    //     beforeEach(() => {
    //         instance.layout = "horizontal";
    //         instance.grid = true;
    //         fixture.detectChanges();
    //     });
    //     horizontalTests();
    // });

    describe("Compact", () => {
        beforeEach(() => {
            instance.layout = "compact";
            fixture.detectChanges();
        });
        compactTests();
    });

    // describe("Compact with Grid", () => {
    //     beforeEach(() => {
    //         instance.layout = "compact";
    //         instance.grid = true;
    //         fixture.detectChanges();
    //     });
    //     compactTests();
    // });
});
