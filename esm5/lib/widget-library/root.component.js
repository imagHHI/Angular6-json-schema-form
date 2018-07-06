/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { JsonSchemaFormService } from '../json-schema-form.service';
var RootComponent = /** @class */ (function () {
    function RootComponent(jsf) {
        this.jsf = jsf;
        this.isFlexItem = false;
    }
    /**
     * @param {?} node
     * @return {?}
     */
    RootComponent.prototype.isDraggable = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        return node.arrayItem && node.type !== '$ref' &&
            node.arrayItemType === 'list' && this.isOrderable !== false;
    };
    // Set attributes for flexbox child
    // (container attributes are set in section.component)
    /**
     * @param {?} node
     * @param {?} attribute
     * @return {?}
     */
    RootComponent.prototype.getFlexAttribute = /**
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
    RootComponent.prototype.showWidget = /**
     * @param {?} layoutNode
     * @return {?}
     */
    function (layoutNode) {
        return this.jsf.evaluateCondition(layoutNode, this.dataIndex);
    };
    RootComponent.decorators = [
        { type: Component, args: [{
                    selector: 'root-widget',
                    template: "\n    <div *ngFor=\"let layoutItem of layout; let i = index\"\n      [class.form-flex-item]=\"isFlexItem\"\n      [style.align-self]=\"(layoutItem.options || {})['align-self']\"\n      [style.flex-basis]=\"getFlexAttribute(layoutItem, 'flex-basis')\"\n      [style.flex-grow]=\"getFlexAttribute(layoutItem, 'flex-grow')\"\n      [style.flex-shrink]=\"getFlexAttribute(layoutItem, 'flex-shrink')\"\n      [style.order]=\"(layoutItem.options || {}).order\">\n      <div\n        [dataIndex]=\"layoutItem?.arrayItem ? (dataIndex || []).concat(i) : (dataIndex || [])\"\n        [layoutIndex]=\"(layoutIndex || []).concat(i)\"\n        [layoutNode]=\"layoutItem\"\n        [orderable]=\"isDraggable(layoutItem)\">\n        <select-framework-widget *ngIf=\"showWidget(layoutItem)\"\n          [dataIndex]=\"layoutItem?.arrayItem ? (dataIndex || []).concat(i) : (dataIndex || [])\"\n          [layoutIndex]=\"(layoutIndex || []).concat(i)\"\n          [layoutNode]=\"layoutItem\"></select-framework-widget>\n      </div>\n    </div>",
                    styles: ["\n    [draggable=true] {\n      transition: all 150ms cubic-bezier(.4, 0, .2, 1);\n    }\n    [draggable=true]:hover {\n      cursor: move;\n      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n      position: relative; z-index: 10;\n      margin-top: -1px;\n      margin-left: -1px;\n      margin-right: 1px;\n      margin-bottom: 1px;\n    }\n    [draggable=true].drag-target-top {\n      box-shadow: 0 -2px 0 #000;\n      position: relative; z-index: 20;\n    }\n    [draggable=true].drag-target-bottom {\n      box-shadow: 0 2px 0 #000;\n      position: relative; z-index: 20;\n    }\n  "],
                },] },
    ];
    /** @nocollapse */
    RootComponent.ctorParameters = function () { return [
        { type: JsonSchemaFormService }
    ]; };
    RootComponent.propDecorators = {
        dataIndex: [{ type: Input }],
        layoutIndex: [{ type: Input }],
        layout: [{ type: Input }],
        isOrderable: [{ type: Input }],
        isFlexItem: [{ type: Input }]
    };
    return RootComponent;
}());
export { RootComponent };
if (false) {
    /** @type {?} */
    RootComponent.prototype.options;
    /** @type {?} */
    RootComponent.prototype.dataIndex;
    /** @type {?} */
    RootComponent.prototype.layoutIndex;
    /** @type {?} */
    RootComponent.prototype.layout;
    /** @type {?} */
    RootComponent.prototype.isOrderable;
    /** @type {?} */
    RootComponent.prototype.isFlexItem;
    /** @type {?} */
    RootComponent.prototype.jsf;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qc29uLXNjaGVtYS1mb3JtLyIsInNvdXJjZXMiOlsibGliL3dpZGdldC1saWJyYXJ5L3Jvb3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUV2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7SUF1RGxFLHVCQUNVO1FBQUEsUUFBRyxHQUFILEdBQUc7MEJBSFMsS0FBSztLQUl0Qjs7Ozs7SUFFTCxtQ0FBVzs7OztJQUFYLFVBQVksSUFBUztRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU07WUFDM0MsSUFBSSxDQUFDLGFBQWEsS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxLQUFLLENBQUM7S0FDL0Q7SUFFRCxtQ0FBbUM7SUFDbkMsc0RBQXNEOzs7Ozs7SUFDdEQsd0NBQWdCOzs7OztJQUFoQixVQUFpQixJQUFTLEVBQUUsU0FBaUI7O1FBQzNDLElBQU0sS0FBSyxHQUFHLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQzFELENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDaEU7Ozs7O0lBRUQsa0NBQVU7Ozs7SUFBVixVQUFXLFVBQWU7UUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUMvRDs7Z0JBdkVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLG1nQ0FrQkQ7b0JBQ1QsTUFBTSxFQUFFLENBQUMsK2tCQXFCUixDQUFDO2lCQUNIOzs7O2dCQTlDUSxxQkFBcUI7Ozs0QkFpRDNCLEtBQUs7OEJBQ0wsS0FBSzt5QkFDTCxLQUFLOzhCQUNMLEtBQUs7NkJBQ0wsS0FBSzs7d0JBdkRSOztTQWlEYSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBKc29uU2NoZW1hRm9ybVNlcnZpY2UgfSBmcm9tICcuLi9qc29uLXNjaGVtYS1mb3JtLnNlcnZpY2UnO1xuaW1wb3J0IHsgaGFzVmFsdWUsIEpzb25Qb2ludGVyIH0gZnJvbSAnLi4vc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncm9vdC13aWRnZXQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGxheW91dEl0ZW0gb2YgbGF5b3V0OyBsZXQgaSA9IGluZGV4XCJcbiAgICAgIFtjbGFzcy5mb3JtLWZsZXgtaXRlbV09XCJpc0ZsZXhJdGVtXCJcbiAgICAgIFtzdHlsZS5hbGlnbi1zZWxmXT1cIihsYXlvdXRJdGVtLm9wdGlvbnMgfHwge30pWydhbGlnbi1zZWxmJ11cIlxuICAgICAgW3N0eWxlLmZsZXgtYmFzaXNdPVwiZ2V0RmxleEF0dHJpYnV0ZShsYXlvdXRJdGVtLCAnZmxleC1iYXNpcycpXCJcbiAgICAgIFtzdHlsZS5mbGV4LWdyb3ddPVwiZ2V0RmxleEF0dHJpYnV0ZShsYXlvdXRJdGVtLCAnZmxleC1ncm93JylcIlxuICAgICAgW3N0eWxlLmZsZXgtc2hyaW5rXT1cImdldEZsZXhBdHRyaWJ1dGUobGF5b3V0SXRlbSwgJ2ZsZXgtc2hyaW5rJylcIlxuICAgICAgW3N0eWxlLm9yZGVyXT1cIihsYXlvdXRJdGVtLm9wdGlvbnMgfHwge30pLm9yZGVyXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIFtkYXRhSW5kZXhdPVwibGF5b3V0SXRlbT8uYXJyYXlJdGVtID8gKGRhdGFJbmRleCB8fCBbXSkuY29uY2F0KGkpIDogKGRhdGFJbmRleCB8fCBbXSlcIlxuICAgICAgICBbbGF5b3V0SW5kZXhdPVwiKGxheW91dEluZGV4IHx8IFtdKS5jb25jYXQoaSlcIlxuICAgICAgICBbbGF5b3V0Tm9kZV09XCJsYXlvdXRJdGVtXCJcbiAgICAgICAgW29yZGVyYWJsZV09XCJpc0RyYWdnYWJsZShsYXlvdXRJdGVtKVwiPlxuICAgICAgICA8c2VsZWN0LWZyYW1ld29yay13aWRnZXQgKm5nSWY9XCJzaG93V2lkZ2V0KGxheW91dEl0ZW0pXCJcbiAgICAgICAgICBbZGF0YUluZGV4XT1cImxheW91dEl0ZW0/LmFycmF5SXRlbSA/IChkYXRhSW5kZXggfHwgW10pLmNvbmNhdChpKSA6IChkYXRhSW5kZXggfHwgW10pXCJcbiAgICAgICAgICBbbGF5b3V0SW5kZXhdPVwiKGxheW91dEluZGV4IHx8IFtdKS5jb25jYXQoaSlcIlxuICAgICAgICAgIFtsYXlvdXROb2RlXT1cImxheW91dEl0ZW1cIj48L3NlbGVjdC1mcmFtZXdvcmstd2lkZ2V0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YCxcbiAgc3R5bGVzOiBbYFxuICAgIFtkcmFnZ2FibGU9dHJ1ZV0ge1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGN1YmljLWJlemllciguNCwgMCwgLjIsIDEpO1xuICAgIH1cbiAgICBbZHJhZ2dhYmxlPXRydWVdOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogbW92ZTtcbiAgICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgei1pbmRleDogMTA7XG4gICAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDFweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFweDtcbiAgICB9XG4gICAgW2RyYWdnYWJsZT10cnVlXS5kcmFnLXRhcmdldC10b3Age1xuICAgICAgYm94LXNoYWRvdzogMCAtMnB4IDAgIzAwMDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgei1pbmRleDogMjA7XG4gICAgfVxuICAgIFtkcmFnZ2FibGU9dHJ1ZV0uZHJhZy10YXJnZXQtYm90dG9tIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDAgIzAwMDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgei1pbmRleDogMjA7XG4gICAgfVxuICBgXSxcbn0pXG5leHBvcnQgY2xhc3MgUm9vdENvbXBvbmVudCB7XG4gIG9wdGlvbnM6IGFueTtcbiAgQElucHV0KCkgZGF0YUluZGV4OiBudW1iZXJbXTtcbiAgQElucHV0KCkgbGF5b3V0SW5kZXg6IG51bWJlcltdO1xuICBASW5wdXQoKSBsYXlvdXQ6IGFueVtdO1xuICBASW5wdXQoKSBpc09yZGVyYWJsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgaXNGbGV4SXRlbSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUganNmOiBKc29uU2NoZW1hRm9ybVNlcnZpY2VcbiAgKSB7IH1cblxuICBpc0RyYWdnYWJsZShub2RlOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gbm9kZS5hcnJheUl0ZW0gJiYgbm9kZS50eXBlICE9PSAnJHJlZicgJiZcbiAgICAgIG5vZGUuYXJyYXlJdGVtVHlwZSA9PT0gJ2xpc3QnICYmIHRoaXMuaXNPcmRlcmFibGUgIT09IGZhbHNlO1xuICB9XG5cbiAgLy8gU2V0IGF0dHJpYnV0ZXMgZm9yIGZsZXhib3ggY2hpbGRcbiAgLy8gKGNvbnRhaW5lciBhdHRyaWJ1dGVzIGFyZSBzZXQgaW4gc2VjdGlvbi5jb21wb25lbnQpXG4gIGdldEZsZXhBdHRyaWJ1dGUobm9kZTogYW55LCBhdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIGNvbnN0IGluZGV4ID0gWydmbGV4LWdyb3cnLCAnZmxleC1zaHJpbmsnLCAnZmxleC1iYXNpcyddLmluZGV4T2YoYXR0cmlidXRlKTtcbiAgICByZXR1cm4gKChub2RlLm9wdGlvbnMgfHwge30pLmZsZXggfHwgJycpLnNwbGl0KC9cXHMrLylbaW5kZXhdIHx8XG4gICAgICAobm9kZS5vcHRpb25zIHx8IHt9KVthdHRyaWJ1dGVdIHx8IFsnMScsICcxJywgJ2F1dG8nXVtpbmRleF07XG4gIH1cblxuICBzaG93V2lkZ2V0KGxheW91dE5vZGU6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmpzZi5ldmFsdWF0ZUNvbmRpdGlvbihsYXlvdXROb2RlLCB0aGlzLmRhdGFJbmRleCk7XG4gIH1cbn1cbiJdfQ==