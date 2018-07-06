/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderableDirective } from '../shared/orderable.directive';
import { JsonSchemaFormService } from '../json-schema-form.service';
import { BASIC_WIDGETS } from './index';
export class WidgetLibraryModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: WidgetLibraryModule,
            providers: [JsonSchemaFormService]
        };
    }
}
WidgetLibraryModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, ReactiveFormsModule],
                declarations: [...BASIC_WIDGETS, OrderableDirective],
                exports: [...BASIC_WIDGETS, OrderableDirective],
                entryComponents: [...BASIC_WIDGETS],
                providers: [JsonSchemaFormService]
            },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LWxpYnJhcnkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanNvbi1zY2hlbWEtZm9ybS8iLCJzb3VyY2VzIjpbImxpYi93aWRnZXQtbGlicmFyeS93aWRnZXQtbGlicmFyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFbkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFcEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQVN4QyxNQUFNOzs7O0lBQ0osTUFBTSxDQUFDLE9BQU87UUFDWixNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFNBQVMsRUFBRSxDQUFFLHFCQUFxQixDQUFFO1NBQ3JDLENBQUM7S0FDSDs7O1lBYkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBVSxDQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsbUJBQW1CLENBQUU7Z0JBQ25FLFlBQVksRUFBSyxDQUFFLEdBQUcsYUFBYSxFQUFFLGtCQUFrQixDQUFFO2dCQUN6RCxPQUFPLEVBQVUsQ0FBRSxHQUFHLGFBQWEsRUFBRSxrQkFBa0IsQ0FBRTtnQkFDekQsZUFBZSxFQUFFLENBQUUsR0FBRyxhQUFhLENBQUU7Z0JBQ3JDLFNBQVMsRUFBUSxDQUFFLHFCQUFxQixDQUFFO2FBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgT3JkZXJhYmxlRGlyZWN0aXZlIH0gZnJvbSAnLi4vc2hhcmVkL29yZGVyYWJsZS5kaXJlY3RpdmUnO1xuXG5pbXBvcnQgeyBKc29uU2NoZW1hRm9ybVNlcnZpY2UgfSBmcm9tICcuLi9qc29uLXNjaGVtYS1mb3JtLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBCQVNJQ19XSURHRVRTIH0gZnJvbSAnLi9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6ICAgICAgICAgWyBDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIF0sXG4gIGRlY2xhcmF0aW9uczogICAgWyAuLi5CQVNJQ19XSURHRVRTLCBPcmRlcmFibGVEaXJlY3RpdmUgXSxcbiAgZXhwb3J0czogICAgICAgICBbIC4uLkJBU0lDX1dJREdFVFMsIE9yZGVyYWJsZURpcmVjdGl2ZSBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFsgLi4uQkFTSUNfV0lER0VUUyBdLFxuICBwcm92aWRlcnM6ICAgICAgIFsgSnNvblNjaGVtYUZvcm1TZXJ2aWNlIF1cbn0pXG5leHBvcnQgY2xhc3MgV2lkZ2V0TGlicmFyeU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogV2lkZ2V0TGlicmFyeU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogWyBKc29uU2NoZW1hRm9ybVNlcnZpY2UgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==