/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { JsonSchemaFormService } from '../../json-schema-form.service';
var FlexLayoutRootComponent = /** @class */ (function () {
    function FlexLayoutRootComponent(jsf) {
        this.jsf = jsf;
        this.isFlexItem = false;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    FlexLayoutRootComponent.prototype.removeItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.jsf.removeItem(item);
    };
    // Set attributes for flexbox child
    // (container attributes are set in flex-layout-section.component)
    /**
     * @param {?} node
     * @param {?} attribute
     * @return {?}
     */
    FlexLayoutRootComponent.prototype.getFlexAttribute = /**
     * @param {?} node
     * @param {?} attribute
     * @return {?}
     */
    function (node, attribute) {
        /** @type {?} */
        var index = ['flex-grow', 'flex-shrink', 'flex-basis'].indexOf(attribute);
        return ((node.options || {}).flex || '').split(/\s+/)[index] ||
            (node.options || {})[attribute] || ['1', '1', 'auto'][index];
    };
    /**
     * @param {?} layoutNode
     * @return {?}
     */
    FlexLayoutRootComponent.prototype.showWidget = /**
     * @param {?} layoutNode
     * @return {?}
     */
    function (layoutNode) {
        return this.jsf.evaluateCondition(layoutNode, this.dataIndex);
    };
    FlexLayoutRootComponent.decorators = [
        { type: Component, args: [{
                    selector: 'flex-layout-root-widget',
                    template: "\n    <div *ngFor=\"let layoutNode of layout; let i = index\"\n      [class.form-flex-item]=\"isFlexItem\"\n      [style.flex-grow]=\"getFlexAttribute(layoutNode, 'flex-grow')\"\n      [style.flex-shrink]=\"getFlexAttribute(layoutNode, 'flex-shrink')\"\n      [style.flex-basis]=\"getFlexAttribute(layoutNode, 'flex-basis')\"\n      [style.align-self]=\"(layoutNode?.options || {})['align-self']\"\n      [style.order]=\"layoutNode?.options?.order\"\n      [fxFlex]=\"layoutNode?.options?.fxFlex\"\n      [fxFlexOrder]=\"layoutNode?.options?.fxFlexOrder\"\n      [fxFlexOffset]=\"layoutNode?.options?.fxFlexOffset\"\n      [fxFlexAlign]=\"layoutNode?.options?.fxFlexAlign\">\n      <select-framework-widget *ngIf=\"showWidget(layoutNode)\"\n        [dataIndex]=\"layoutNode?.arrayItem ? (dataIndex || []).concat(i) : (dataIndex || [])\"\n        [layoutIndex]=\"(layoutIndex || []).concat(i)\"\n        [layoutNode]=\"layoutNode\"></select-framework-widget>\n    <div>",
                    changeDetection: ChangeDetectionStrategy.Default,
                },] },
    ];
    /** @nocollapse */
    FlexLayoutRootComponent.ctorParameters = function () { return [
        { type: JsonSchemaFormService }
    ]; };
    FlexLayoutRootComponent.propDecorators = {
        dataIndex: [{ type: Input }],
        layoutIndex: [{ type: Input }],
        layout: [{ type: Input }],
        isFlexItem: [{ type: Input }]
    };
    return FlexLayoutRootComponent;
}());
export { FlexLayoutRootComponent };
if (false) {
    /** @type {?} */
    FlexLayoutRootComponent.prototype.dataIndex;
    /** @type {?} */
    FlexLayoutRootComponent.prototype.layoutIndex;
    /** @type {?} */
    FlexLayoutRootComponent.prototype.layout;
    /** @type {?} */
    FlexLayoutRootComponent.prototype.isFlexItem;
    /** @type {?} */
    FlexLayoutRootComponent.prototype.jsf;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxleC1sYXlvdXQtcm9vdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qc29uLXNjaGVtYS1mb3JtLyIsInNvdXJjZXMiOlsibGliL2ZyYW1ld29yay1saWJyYXJ5L21hdGVyaWFsLWRlc2lnbi1mcmFtZXdvcmsvZmxleC1sYXlvdXQtcm9vdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztJQThCckUsaUNBQ1U7UUFBQSxRQUFHLEdBQUgsR0FBRzswQkFIUyxLQUFLO0tBSXRCOzs7OztJQUVMLDRDQUFVOzs7O0lBQVYsVUFBVyxJQUFJO1FBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDM0I7SUFFRCxtQ0FBbUM7SUFDbkMsa0VBQWtFOzs7Ozs7SUFDbEUsa0RBQWdCOzs7OztJQUFoQixVQUFpQixJQUFTLEVBQUUsU0FBaUI7O1FBQzNDLElBQU0sS0FBSyxHQUFHLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQzFELENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDaEU7Ozs7O0lBRUQsNENBQVU7Ozs7SUFBVixVQUFXLFVBQWU7UUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUMvRDs7Z0JBN0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxRQUFRLEVBQUUsMDhCQWdCRjtvQkFDUixlQUFlLEVBQUUsdUJBQXVCLENBQUMsT0FBTztpQkFDakQ7Ozs7Z0JBdkJRLHFCQUFxQjs7OzRCQXlCM0IsS0FBSzs4QkFDTCxLQUFLO3lCQUNMLEtBQUs7NkJBQ0wsS0FBSzs7a0NBOUJSOztTQTBCYSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBKc29uU2NoZW1hRm9ybVNlcnZpY2UgfSBmcm9tICcuLi8uLi9qc29uLXNjaGVtYS1mb3JtLnNlcnZpY2UnO1xuaW1wb3J0IHsgaGFzVmFsdWUsIEpzb25Qb2ludGVyIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmxleC1sYXlvdXQtcm9vdC13aWRnZXQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGxheW91dE5vZGUgb2YgbGF5b3V0OyBsZXQgaSA9IGluZGV4XCJcbiAgICAgIFtjbGFzcy5mb3JtLWZsZXgtaXRlbV09XCJpc0ZsZXhJdGVtXCJcbiAgICAgIFtzdHlsZS5mbGV4LWdyb3ddPVwiZ2V0RmxleEF0dHJpYnV0ZShsYXlvdXROb2RlLCAnZmxleC1ncm93JylcIlxuICAgICAgW3N0eWxlLmZsZXgtc2hyaW5rXT1cImdldEZsZXhBdHRyaWJ1dGUobGF5b3V0Tm9kZSwgJ2ZsZXgtc2hyaW5rJylcIlxuICAgICAgW3N0eWxlLmZsZXgtYmFzaXNdPVwiZ2V0RmxleEF0dHJpYnV0ZShsYXlvdXROb2RlLCAnZmxleC1iYXNpcycpXCJcbiAgICAgIFtzdHlsZS5hbGlnbi1zZWxmXT1cIihsYXlvdXROb2RlPy5vcHRpb25zIHx8IHt9KVsnYWxpZ24tc2VsZiddXCJcbiAgICAgIFtzdHlsZS5vcmRlcl09XCJsYXlvdXROb2RlPy5vcHRpb25zPy5vcmRlclwiXG4gICAgICBbZnhGbGV4XT1cImxheW91dE5vZGU/Lm9wdGlvbnM/LmZ4RmxleFwiXG4gICAgICBbZnhGbGV4T3JkZXJdPVwibGF5b3V0Tm9kZT8ub3B0aW9ucz8uZnhGbGV4T3JkZXJcIlxuICAgICAgW2Z4RmxleE9mZnNldF09XCJsYXlvdXROb2RlPy5vcHRpb25zPy5meEZsZXhPZmZzZXRcIlxuICAgICAgW2Z4RmxleEFsaWduXT1cImxheW91dE5vZGU/Lm9wdGlvbnM/LmZ4RmxleEFsaWduXCI+XG4gICAgICA8c2VsZWN0LWZyYW1ld29yay13aWRnZXQgKm5nSWY9XCJzaG93V2lkZ2V0KGxheW91dE5vZGUpXCJcbiAgICAgICAgW2RhdGFJbmRleF09XCJsYXlvdXROb2RlPy5hcnJheUl0ZW0gPyAoZGF0YUluZGV4IHx8IFtdKS5jb25jYXQoaSkgOiAoZGF0YUluZGV4IHx8IFtdKVwiXG4gICAgICAgIFtsYXlvdXRJbmRleF09XCIobGF5b3V0SW5kZXggfHwgW10pLmNvbmNhdChpKVwiXG4gICAgICAgIFtsYXlvdXROb2RlXT1cImxheW91dE5vZGVcIj48L3NlbGVjdC1mcmFtZXdvcmstd2lkZ2V0PlxuICAgIDxkaXY+YCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0LFxufSlcbmV4cG9ydCBjbGFzcyBGbGV4TGF5b3V0Um9vdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGFJbmRleDogbnVtYmVyW107XG4gIEBJbnB1dCgpIGxheW91dEluZGV4OiBudW1iZXJbXTtcbiAgQElucHV0KCkgbGF5b3V0OiBhbnlbXTtcbiAgQElucHV0KCkgaXNGbGV4SXRlbSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUganNmOiBKc29uU2NoZW1hRm9ybVNlcnZpY2VcbiAgKSB7IH1cblxuICByZW1vdmVJdGVtKGl0ZW0pIHtcbiAgICB0aGlzLmpzZi5yZW1vdmVJdGVtKGl0ZW0pO1xuICB9XG5cbiAgLy8gU2V0IGF0dHJpYnV0ZXMgZm9yIGZsZXhib3ggY2hpbGRcbiAgLy8gKGNvbnRhaW5lciBhdHRyaWJ1dGVzIGFyZSBzZXQgaW4gZmxleC1sYXlvdXQtc2VjdGlvbi5jb21wb25lbnQpXG4gIGdldEZsZXhBdHRyaWJ1dGUobm9kZTogYW55LCBhdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIGNvbnN0IGluZGV4ID0gWydmbGV4LWdyb3cnLCAnZmxleC1zaHJpbmsnLCAnZmxleC1iYXNpcyddLmluZGV4T2YoYXR0cmlidXRlKTtcbiAgICByZXR1cm4gKChub2RlLm9wdGlvbnMgfHwge30pLmZsZXggfHwgJycpLnNwbGl0KC9cXHMrLylbaW5kZXhdIHx8XG4gICAgICAobm9kZS5vcHRpb25zIHx8IHt9KVthdHRyaWJ1dGVdIHx8IFsnMScsICcxJywgJ2F1dG8nXVtpbmRleF07XG4gIH1cblxuICBzaG93V2lkZ2V0KGxheW91dE5vZGU6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmpzZi5ldmFsdWF0ZUNvbmRpdGlvbihsYXlvdXROb2RlLCB0aGlzLmRhdGFJbmRleCk7XG4gIH1cbn1cbiJdfQ==