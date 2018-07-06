/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatNativeDateModule, MatRadioModule, MatSelectModule, MatSliderModule, MatSlideToggleModule, MatStepperModule, MatTabsModule, MatTooltipModule, } from '@angular/material';
/** @type {?} */
export var ANGULAR_MATERIAL_MODULES = [
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule,
    MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatExpansionModule,
    MatFormFieldModule, MatIconModule, MatInputModule, MatNativeDateModule,
    MatRadioModule, MatSelectModule, MatSliderModule, MatSlideToggleModule,
    MatStepperModule, MatTabsModule, MatTooltipModule,
];
import { WidgetLibraryModule } from '../../widget-library/widget-library.module';
import { Framework } from '../framework';
import { MATERIAL_FRAMEWORK_COMPONENTS } from './index';
import { MaterialDesignFramework } from './material-design.framework';
var MaterialDesignFrameworkModule = /** @class */ (function () {
    function MaterialDesignFrameworkModule() {
    }
    /**
     * @return {?}
     */
    MaterialDesignFrameworkModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: MaterialDesignFrameworkModule,
            providers: [
                { provide: Framework, useClass: MaterialDesignFramework, multi: true }
            ]
        };
    };
    MaterialDesignFrameworkModule.decorators = [
        { type: NgModule, args: [{
                    imports: tslib_1.__spread([
                        CommonModule, FormsModule, ReactiveFormsModule, FlexLayoutModule
                    ], ANGULAR_MATERIAL_MODULES, [
                        WidgetLibraryModule
                    ]),
                    declarations: tslib_1.__spread(MATERIAL_FRAMEWORK_COMPONENTS),
                    exports: tslib_1.__spread(MATERIAL_FRAMEWORK_COMPONENTS),
                    entryComponents: tslib_1.__spread(MATERIAL_FRAMEWORK_COMPONENTS)
                },] },
    ];
    return MaterialDesignFrameworkModule;
}());
export { MaterialDesignFrameworkModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0ZXJpYWwtZGVzaWduLWZyYW1ld29yay5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qc29uLXNjaGVtYS1mb3JtLyIsInNvdXJjZXMiOlsibGliL2ZyYW1ld29yay1saWJyYXJ5L21hdGVyaWFsLWRlc2lnbi1mcmFtZXdvcmsvbWF0ZXJpYWwtZGVzaWduLWZyYW1ld29yay5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFDTCxxQkFBcUIsRUFBRSxlQUFlLEVBQUUscUJBQXFCLEVBQUUsYUFBYSxFQUM1RSxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQzFFLGtCQUFrQixFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsbUJBQW1CLEVBQ3RFLGNBQWMsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLG9CQUFvQixFQUN0RSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEdBQ2xELE1BQU0sbUJBQW1CLENBQUM7O0FBQzNCLFdBQWEsd0JBQXdCLEdBQUc7SUFDdEMscUJBQXFCLEVBQUUsZUFBZSxFQUFFLHFCQUFxQixFQUFFLGFBQWE7SUFDNUUsaUJBQWlCLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixFQUFFLGtCQUFrQjtJQUMxRSxrQkFBa0IsRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLG1CQUFtQjtJQUN0RSxjQUFjLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxvQkFBb0I7SUFDdEUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLGdCQUFnQjtDQUNsRCxDQUFDO0FBVUYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDakYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN6QyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7SUFZN0QscUNBQU87OztJQUFkO1FBQ0UsTUFBTSxDQUFDO1lBQ0wsUUFBUSxFQUFFLDZCQUE2QjtZQUN2QyxTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO2FBQ3ZFO1NBQ0YsQ0FBQztLQUNIOztnQkFqQkYsUUFBUSxTQUFDO29CQUNSLE9BQU87d0JBQ0wsWUFBWSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0I7dUJBQzdELHdCQUF3Qjt3QkFBRSxtQkFBbUI7c0JBQ2pEO29CQUNELFlBQVksbUJBQVUsNkJBQTZCLENBQUU7b0JBQ3JELE9BQU8sbUJBQWUsNkJBQTZCLENBQUU7b0JBQ3JELGVBQWUsbUJBQU8sNkJBQTZCLENBQUU7aUJBQ3REOzt3Q0F4Q0Q7O1NBeUNhLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xuaW1wb3J0IHtcbiAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLCBNYXRCdXR0b25Nb2R1bGUsIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSwgTWF0Q2FyZE1vZHVsZSxcbiAgTWF0Q2hlY2tib3hNb2R1bGUsIE1hdENoaXBzTW9kdWxlLCBNYXREYXRlcGlja2VyTW9kdWxlLCBNYXRFeHBhbnNpb25Nb2R1bGUsXG4gIE1hdEZvcm1GaWVsZE1vZHVsZSwgTWF0SWNvbk1vZHVsZSwgTWF0SW5wdXRNb2R1bGUsIE1hdE5hdGl2ZURhdGVNb2R1bGUsXG4gIE1hdFJhZGlvTW9kdWxlLCBNYXRTZWxlY3RNb2R1bGUsIE1hdFNsaWRlck1vZHVsZSwgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gIE1hdFN0ZXBwZXJNb2R1bGUsIE1hdFRhYnNNb2R1bGUsIE1hdFRvb2x0aXBNb2R1bGUsXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmV4cG9ydCBjb25zdCBBTkdVTEFSX01BVEVSSUFMX01PRFVMRVMgPSBbXG4gIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlLCBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsIE1hdENhcmRNb2R1bGUsXG4gIE1hdENoZWNrYm94TW9kdWxlLCBNYXRDaGlwc01vZHVsZSwgTWF0RGF0ZXBpY2tlck1vZHVsZSwgTWF0RXhwYW5zaW9uTW9kdWxlLFxuICBNYXRGb3JtRmllbGRNb2R1bGUsIE1hdEljb25Nb2R1bGUsIE1hdElucHV0TW9kdWxlLCBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICBNYXRSYWRpb01vZHVsZSwgTWF0U2VsZWN0TW9kdWxlLCBNYXRTbGlkZXJNb2R1bGUsIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxuICBNYXRTdGVwcGVyTW9kdWxlLCBNYXRUYWJzTW9kdWxlLCBNYXRUb29sdGlwTW9kdWxlLFxuXTtcbi8qKlxuICogdW51c2VkIEBhbmd1bGFyL21hdGVyaWFsIG1vZHVsZXM6XG4gKiBNYXREaWFsb2dNb2R1bGUsIE1hdEdyaWRMaXN0TW9kdWxlLCBNYXRMaXN0TW9kdWxlLCBNYXRNZW51TW9kdWxlLFxuICogTWF0UGFnaW5hdG9yTW9kdWxlLCBNYXRQcm9ncmVzc0Jhck1vZHVsZSwgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICogTWF0U2lkZW5hdk1vZHVsZSwgTWF0U25hY2tCYXJNb2R1bGUsIE1hdFNvcnRNb2R1bGUsIE1hdFRhYmxlTW9kdWxlLFxuICogTWF0VG9vbGJhck1vZHVsZSxcbiAqL1xuXG5pbXBvcnQgeyBKc29uU2NoZW1hRm9ybVNlcnZpY2UgfSBmcm9tICcuLi8uLi9qc29uLXNjaGVtYS1mb3JtLnNlcnZpY2UnO1xuaW1wb3J0IHsgV2lkZ2V0TGlicmFyeU1vZHVsZSB9IGZyb20gJy4uLy4uL3dpZGdldC1saWJyYXJ5L3dpZGdldC1saWJyYXJ5Lm1vZHVsZSc7XG5pbXBvcnQgeyBGcmFtZXdvcmsgfSBmcm9tICcuLi9mcmFtZXdvcmsnO1xuaW1wb3J0IHsgTUFURVJJQUxfRlJBTUVXT1JLX0NPTVBPTkVOVFMgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IE1hdGVyaWFsRGVzaWduRnJhbWV3b3JrIH0gZnJvbSAnLi9tYXRlcmlhbC1kZXNpZ24uZnJhbWV3b3JrJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUsIEZsZXhMYXlvdXRNb2R1bGUsXG4gICAgLi4uQU5HVUxBUl9NQVRFUklBTF9NT0RVTEVTLCBXaWRnZXRMaWJyYXJ5TW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogICAgWyAuLi5NQVRFUklBTF9GUkFNRVdPUktfQ09NUE9ORU5UUyBdLFxuICBleHBvcnRzOiAgICAgICAgIFsgLi4uTUFURVJJQUxfRlJBTUVXT1JLX0NPTVBPTkVOVFMgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbIC4uLk1BVEVSSUFMX0ZSQU1FV09SS19DT01QT05FTlRTIF1cbn0pXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxEZXNpZ25GcmFtZXdvcmtNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE1hdGVyaWFsRGVzaWduRnJhbWV3b3JrTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogRnJhbWV3b3JrLCB1c2VDbGFzczogTWF0ZXJpYWxEZXNpZ25GcmFtZXdvcmssIG11bHRpOiB0cnVlIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=