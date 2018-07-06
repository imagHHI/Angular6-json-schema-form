/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { WidgetLibraryService } from '../widget-library/widget-library.service';
import { hasOwn } from '../shared/utility.functions';
import { Framework } from './framework';
var FrameworkLibraryService = /** @class */ (function () {
    function FrameworkLibraryService(frameworks, widgetLibrary) {
        var _this = this;
        this.frameworks = frameworks;
        this.widgetLibrary = widgetLibrary;
        this.activeFramework = null;
        this.loadExternalAssets = false;
        this.frameworkLibrary = {};
        this.frameworks.forEach(function (framework) {
            return _this.frameworkLibrary[framework.name] = framework;
        });
        this.defaultFramework = this.frameworks[0].name;
        this.setFramework(this.defaultFramework);
    }
    /**
     * @param {?=} loadExternalAssets
     * @return {?}
     */
    FrameworkLibraryService.prototype.setLoadExternalAssets = /**
     * @param {?=} loadExternalAssets
     * @return {?}
     */
    function (loadExternalAssets) {
        if (loadExternalAssets === void 0) { loadExternalAssets = true; }
        this.loadExternalAssets = !!loadExternalAssets;
    };
    /**
     * @param {?=} framework
     * @param {?=} loadExternalAssets
     * @return {?}
     */
    FrameworkLibraryService.prototype.setFramework = /**
     * @param {?=} framework
     * @param {?=} loadExternalAssets
     * @return {?}
     */
    function (framework, loadExternalAssets) {
        if (framework === void 0) { framework = this.defaultFramework; }
        if (loadExternalAssets === void 0) { loadExternalAssets = this.loadExternalAssets; }
        this.activeFramework =
            typeof framework === 'string' && this.hasFramework(framework) ?
                this.frameworkLibrary[framework] :
                typeof framework === 'object' && hasOwn(framework, 'framework') ?
                    framework :
                    this.frameworkLibrary[this.defaultFramework];
        return this.registerFrameworkWidgets(this.activeFramework);
    };
    /**
     * @param {?} framework
     * @return {?}
     */
    FrameworkLibraryService.prototype.registerFrameworkWidgets = /**
     * @param {?} framework
     * @return {?}
     */
    function (framework) {
        return hasOwn(framework, 'widgets') ?
            this.widgetLibrary.registerFrameworkWidgets(framework.widgets) :
            this.widgetLibrary.unRegisterFrameworkWidgets();
    };
    /**
     * @param {?} type
     * @return {?}
     */
    FrameworkLibraryService.prototype.hasFramework = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return hasOwn(this.frameworkLibrary, type);
    };
    /**
     * @return {?}
     */
    FrameworkLibraryService.prototype.getFramework = /**
     * @return {?}
     */
    function () {
        if (!this.activeFramework) {
            this.setFramework('default', true);
        }
        return this.activeFramework.framework;
    };
    /**
     * @return {?}
     */
    FrameworkLibraryService.prototype.getFrameworkWidgets = /**
     * @return {?}
     */
    function () {
        return this.activeFramework.widgets || {};
    };
    /**
     * @param {?=} load
     * @return {?}
     */
    FrameworkLibraryService.prototype.getFrameworkStylesheets = /**
     * @param {?=} load
     * @return {?}
     */
    function (load) {
        if (load === void 0) { load = this.loadExternalAssets; }
        return (load && this.activeFramework.stylesheets) || [];
    };
    /**
     * @param {?=} load
     * @return {?}
     */
    FrameworkLibraryService.prototype.getFrameworkScripts = /**
     * @param {?=} load
     * @return {?}
     */
    function (load) {
        if (load === void 0) { load = this.loadExternalAssets; }
        return (load && this.activeFramework.scripts) || [];
    };
    FrameworkLibraryService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    FrameworkLibraryService.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Inject, args: [Framework,] }] },
        { type: WidgetLibraryService, decorators: [{ type: Inject, args: [WidgetLibraryService,] }] }
    ]; };
    return FrameworkLibraryService;
}());
export { FrameworkLibraryService };
if (false) {
    /** @type {?} */
    FrameworkLibraryService.prototype.activeFramework;
    /** @type {?} */
    FrameworkLibraryService.prototype.stylesheets;
    /** @type {?} */
    FrameworkLibraryService.prototype.scripts;
    /** @type {?} */
    FrameworkLibraryService.prototype.loadExternalAssets;
    /** @type {?} */
    FrameworkLibraryService.prototype.defaultFramework;
    /** @type {?} */
    FrameworkLibraryService.prototype.frameworkLibrary;
    /** @type {?} */
    FrameworkLibraryService.prototype.frameworks;
    /** @type {?} */
    FrameworkLibraryService.prototype.widgetLibrary;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWV3b3JrLWxpYnJhcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pzb24tc2NoZW1hLWZvcm0vIiwic291cmNlcyI6WyJsaWIvZnJhbWV3b3JrLWxpYnJhcnkvZnJhbWV3b3JrLWxpYnJhcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDaEYsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXJELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7O0lBbUJ0QyxpQ0FDNkIsVUFBaUIsRUFDTixhQUFtQztRQUYzRSxpQkFTQztRQVI0QixlQUFVLEdBQVYsVUFBVSxDQUFPO1FBQ04sa0JBQWEsR0FBYixhQUFhLENBQXNCOytCQVQ5QyxJQUFJO2tDQUdaLEtBQUs7Z0NBRXdCLEVBQUU7UUFNbEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQSxTQUFTO1lBQy9CLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTO1FBQWpELENBQWlELENBQ2xELENBQUM7UUFDRixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDaEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztLQUMxQzs7Ozs7SUFFTSx1REFBcUI7Ozs7Y0FBQyxrQkFBeUI7UUFBekIsbUNBQUEsRUFBQSx5QkFBeUI7UUFDcEQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQzs7Ozs7OztJQUcxQyw4Q0FBWTs7Ozs7Y0FDakIsU0FBbUQsRUFDbkQsa0JBQTRDO1FBRDVDLDBCQUFBLEVBQUEsWUFBOEIsSUFBSSxDQUFDLGdCQUFnQjtRQUNuRCxtQ0FBQSxFQUFBLHFCQUFxQixJQUFJLENBQUMsa0JBQWtCO1FBRTVDLElBQUksQ0FBQyxlQUFlO1lBQ2xCLE9BQU8sU0FBUyxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxPQUFPLFNBQVMsS0FBSyxRQUFRLElBQUksTUFBTSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO29CQUMvRCxTQUFTLENBQUMsQ0FBQztvQkFDWCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDakQsTUFBTSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7Ozs7OztJQUc3RCwwREFBd0I7Ozs7SUFBeEIsVUFBeUIsU0FBb0I7UUFDM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxhQUFhLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztLQUNuRDs7Ozs7SUFFTSw4Q0FBWTs7OztjQUFDLElBQVk7UUFDOUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7Ozs7O0lBR3RDLDhDQUFZOzs7O1FBQ2pCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUFFO1FBQ2xFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQzs7Ozs7SUFHakMscURBQW1COzs7O1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7Ozs7OztJQUdyQyx5REFBdUI7Ozs7Y0FBQyxJQUF1QztRQUF2QyxxQkFBQSxFQUFBLE9BQWdCLElBQUksQ0FBQyxrQkFBa0I7UUFDcEUsTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDOzs7Ozs7SUFHbkQscURBQW1COzs7O2NBQUMsSUFBdUM7UUFBdkMscUJBQUEsRUFBQSxPQUFnQixJQUFJLENBQUMsa0JBQWtCO1FBQ2hFLE1BQU0sQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7O2dCQTdEdkQsVUFBVTs7Ozs0Q0FVTixNQUFNLFNBQUMsU0FBUztnQkF2Qlosb0JBQW9CLHVCQXdCeEIsTUFBTSxTQUFDLG9CQUFvQjs7a0NBMUJoQzs7U0FnQmEsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFdpZGdldExpYnJhcnlTZXJ2aWNlIH0gZnJvbSAnLi4vd2lkZ2V0LWxpYnJhcnkvd2lkZ2V0LWxpYnJhcnkuc2VydmljZSc7XG5pbXBvcnQgeyBoYXNPd24gfSBmcm9tICcuLi9zaGFyZWQvdXRpbGl0eS5mdW5jdGlvbnMnO1xuXG5pbXBvcnQgeyBGcmFtZXdvcmsgfSBmcm9tICcuL2ZyYW1ld29yayc7XG5cbi8vIFBvc3NpYmxlIGZ1dHVyZSBmcmFtZXdvcmtzOlxuLy8gLSBGb3VuZGF0aW9uIDY6XG4vLyAgIGh0dHA6Ly9qdXN0aW5kYXZpcy5jby8yMDE3LzA2LzE1L3VzaW5nLWZvdW5kYXRpb24tNi1pbi1hbmd1bGFyLTQvXG4vLyAgIGh0dHBzOi8vZ2l0aHViLmNvbS96dXJiL2ZvdW5kYXRpb24tc2l0ZXNcbi8vIC0gU2VtYW50aWMgVUk6XG4vLyAgIGh0dHBzOi8vZ2l0aHViLmNvbS9lZGNhcnJvbGwvbmcyLXNlbWFudGljLXVpXG4vLyAgIGh0dHBzOi8vZ2l0aHViLmNvbS92bGFkb3Rlc2Fub3ZpYy9uZ1NlbWFudGljXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGcmFtZXdvcmtMaWJyYXJ5U2VydmljZSB7XG4gIGFjdGl2ZUZyYW1ld29yazogRnJhbWV3b3JrID0gbnVsbDtcbiAgc3R5bGVzaGVldHM6IChIVE1MU3R5bGVFbGVtZW50fEhUTUxMaW5rRWxlbWVudClbXTtcbiAgc2NyaXB0czogSFRNTFNjcmlwdEVsZW1lbnRbXTtcbiAgbG9hZEV4dGVybmFsQXNzZXRzID0gZmFsc2U7XG4gIGRlZmF1bHRGcmFtZXdvcms6IHN0cmluZztcbiAgZnJhbWV3b3JrTGlicmFyeTogeyBbbmFtZTogc3RyaW5nXTogRnJhbWV3b3JrIH0gPSB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KEZyYW1ld29yaykgcHJpdmF0ZSBmcmFtZXdvcmtzOiBhbnlbXSxcbiAgICBASW5qZWN0KFdpZGdldExpYnJhcnlTZXJ2aWNlKSBwcml2YXRlIHdpZGdldExpYnJhcnk6IFdpZGdldExpYnJhcnlTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuZnJhbWV3b3Jrcy5mb3JFYWNoKGZyYW1ld29yayA9PlxuICAgICAgdGhpcy5mcmFtZXdvcmtMaWJyYXJ5W2ZyYW1ld29yay5uYW1lXSA9IGZyYW1ld29ya1xuICAgICk7XG4gICAgdGhpcy5kZWZhdWx0RnJhbWV3b3JrID0gdGhpcy5mcmFtZXdvcmtzWzBdLm5hbWU7XG4gICAgdGhpcy5zZXRGcmFtZXdvcmsodGhpcy5kZWZhdWx0RnJhbWV3b3JrKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRMb2FkRXh0ZXJuYWxBc3NldHMobG9hZEV4dGVybmFsQXNzZXRzID0gdHJ1ZSk6IHZvaWQge1xuICAgIHRoaXMubG9hZEV4dGVybmFsQXNzZXRzID0gISFsb2FkRXh0ZXJuYWxBc3NldHM7XG4gIH1cblxuICBwdWJsaWMgc2V0RnJhbWV3b3JrKFxuICAgIGZyYW1ld29yazogc3RyaW5nfEZyYW1ld29yayA9IHRoaXMuZGVmYXVsdEZyYW1ld29yayxcbiAgICBsb2FkRXh0ZXJuYWxBc3NldHMgPSB0aGlzLmxvYWRFeHRlcm5hbEFzc2V0c1xuICApOiBib29sZWFuIHtcbiAgICB0aGlzLmFjdGl2ZUZyYW1ld29yayA9XG4gICAgICB0eXBlb2YgZnJhbWV3b3JrID09PSAnc3RyaW5nJyAmJiB0aGlzLmhhc0ZyYW1ld29yayhmcmFtZXdvcmspID9cbiAgICAgICAgdGhpcy5mcmFtZXdvcmtMaWJyYXJ5W2ZyYW1ld29ya10gOlxuICAgICAgdHlwZW9mIGZyYW1ld29yayA9PT0gJ29iamVjdCcgJiYgaGFzT3duKGZyYW1ld29yaywgJ2ZyYW1ld29yaycpID9cbiAgICAgICAgZnJhbWV3b3JrIDpcbiAgICAgICAgdGhpcy5mcmFtZXdvcmtMaWJyYXJ5W3RoaXMuZGVmYXVsdEZyYW1ld29ya107XG4gICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJGcmFtZXdvcmtXaWRnZXRzKHRoaXMuYWN0aXZlRnJhbWV3b3JrKTtcbiAgfVxuXG4gIHJlZ2lzdGVyRnJhbWV3b3JrV2lkZ2V0cyhmcmFtZXdvcms6IEZyYW1ld29yayk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBoYXNPd24oZnJhbWV3b3JrLCAnd2lkZ2V0cycpID9cbiAgICAgIHRoaXMud2lkZ2V0TGlicmFyeS5yZWdpc3RlckZyYW1ld29ya1dpZGdldHMoZnJhbWV3b3JrLndpZGdldHMpIDpcbiAgICAgIHRoaXMud2lkZ2V0TGlicmFyeS51blJlZ2lzdGVyRnJhbWV3b3JrV2lkZ2V0cygpO1xuICB9XG5cbiAgcHVibGljIGhhc0ZyYW1ld29yayh0eXBlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaGFzT3duKHRoaXMuZnJhbWV3b3JrTGlicmFyeSwgdHlwZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RnJhbWV3b3JrKCk6IGFueSB7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZUZyYW1ld29yaykgeyB0aGlzLnNldEZyYW1ld29yaygnZGVmYXVsdCcsIHRydWUpOyB9XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlRnJhbWV3b3JrLmZyYW1ld29yaztcbiAgfVxuXG4gIHB1YmxpYyBnZXRGcmFtZXdvcmtXaWRnZXRzKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlRnJhbWV3b3JrLndpZGdldHMgfHwge307XG4gIH1cblxuICBwdWJsaWMgZ2V0RnJhbWV3b3JrU3R5bGVzaGVldHMobG9hZDogYm9vbGVhbiA9IHRoaXMubG9hZEV4dGVybmFsQXNzZXRzKTogc3RyaW5nW10ge1xuICAgIHJldHVybiAobG9hZCAmJiB0aGlzLmFjdGl2ZUZyYW1ld29yay5zdHlsZXNoZWV0cykgfHwgW107XG4gIH1cblxuICBwdWJsaWMgZ2V0RnJhbWV3b3JrU2NyaXB0cyhsb2FkOiBib29sZWFuID0gdGhpcy5sb2FkRXh0ZXJuYWxBc3NldHMpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIChsb2FkICYmIHRoaXMuYWN0aXZlRnJhbWV3b3JrLnNjcmlwdHMpIHx8IFtdO1xuICB9XG59XG4iXX0=