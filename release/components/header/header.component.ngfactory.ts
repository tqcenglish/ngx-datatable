/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../build/components/header/header.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/security';
import * as import5 from '@angular/core/src/render/api';
import * as import6 from '@angular/core/src/metadata/view';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/constants';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../../../build/components/header/header-cell.component';
import * as import11 from '../../directives/draggable.directive.ngfactory';
import * as import12 from '../../directives/resizeable.directive.ngfactory';
import * as import13 from '../../directives/long-press.directive.ngfactory';
import * as import14 from './header-cell.component.ngfactory';
import * as import15 from '@angular/core/src/linker/view_container';
import * as import16 from '@angular/core/src/linker/element_ref';
import * as import17 from '../../../../build/directives/draggable.directive';
import * as import18 from '../../../../build/directives/resizeable.directive';
import * as import19 from '../../../../build/directives/long-press.directive';
import * as import20 from '../../../node_modules/@angular/common/src/directives/ng_style.ngfactory';
import * as import21 from '../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import22 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import23 from '@angular/core/src/linker/template_ref';
import * as import24 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import25 from '@angular/common/src/directives/ng_for';
import * as import26 from '@angular/common/src/directives/ng_style';
import * as import27 from '../../directives/orderable.directive.ngfactory';
import * as import28 from '@angular/core/src/linker/query_list';
import * as import29 from '../../../../build/directives/orderable.directive';
export class Wrapper_DataTableHeaderComponent {
  /*private*/ _eventHandler:Function;
  context:import0.DataTableHeaderComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  subscription0:any;
  subscription1:any;
  subscription2:any;
  subscription3:any;
  constructor() {
    this._changed = false;
    this.context = new import0.DataTableHeaderComponent();
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
    this._expr_7 = import1.UNINITIALIZED;
    this._expr_8 = import1.UNINITIALIZED;
    this._expr_9 = import1.UNINITIALIZED;
    this._expr_10 = import1.UNINITIALIZED;
    this._expr_11 = import1.UNINITIALIZED;
    this._expr_12 = import1.UNINITIALIZED;
    this._expr_13 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
    (this.subscription1 && this.subscription1.unsubscribe());
    (this.subscription2 && this.subscription2.unsubscribe());
    (this.subscription3 && this.subscription3.unsubscribe());
  }
  check_sortAscendingIcon(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.sortAscendingIcon = currValue;
      this._expr_0 = currValue;
    }
  }
  check_sortDescendingIcon(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.sortDescendingIcon = currValue;
      this._expr_1 = currValue;
    }
  }
  check_scrollbarH(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.scrollbarH = currValue;
      this._expr_2 = currValue;
    }
  }
  check_innerWidth(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.innerWidth = currValue;
      this._expr_3 = currValue;
    }
  }
  check_offsetX(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.offsetX = currValue;
      this._expr_4 = currValue;
    }
  }
  check_sorts(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.sorts = currValue;
      this._expr_5 = currValue;
    }
  }
  check_sortType(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_6,currValue))) {
      this._changed = true;
      this.context.sortType = currValue;
      this._expr_6 = currValue;
    }
  }
  check_allRowsSelected(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_7,currValue))) {
      this._changed = true;
      this.context.allRowsSelected = currValue;
      this._expr_7 = currValue;
    }
  }
  check_selectionType(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_8,currValue))) {
      this._changed = true;
      this.context.selectionType = currValue;
      this._expr_8 = currValue;
    }
  }
  check_reorderable(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_9,currValue))) {
      this._changed = true;
      this.context.reorderable = currValue;
      this._expr_9 = currValue;
    }
  }
  check_headerHeight(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_10,currValue))) {
      this._changed = true;
      this.context.headerHeight = currValue;
      this._expr_10 = currValue;
    }
  }
  check_columns(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_11,currValue))) {
      this._changed = true;
      this.context.columns = currValue;
      this._expr_11 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
    const currVal_12:any = this.context.headerHeight;
    if (import3.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      view.renderer.setElementStyle(el,'height',((view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_12) == null)? (null as any): view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_12).toString()));
      this._expr_12 = currVal_12;
    }
    const currVal_13:any = this.context.headerWidth;
    if (import3.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      view.renderer.setElementStyle(el,'width',((view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_13) == null)? (null as any): view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_13).toString()));
      this._expr_13 = currVal_13;
    }
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean,emit1:boolean,emit2:boolean,emit3:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.sort.subscribe(_eventHandler.bind(view,'sort'))); }
    if (emit1) { (this.subscription1 = this.context.reorder.subscribe(_eventHandler.bind(view,'reorder'))); }
    if (emit2) { (this.subscription2 = this.context.resize.subscribe(_eventHandler.bind(view,'resize'))); }
    if (emit3) { (this.subscription3 = this.context.select.subscribe(_eventHandler.bind(view,'select'))); }
  }
}
var renderType_DataTableHeaderComponent_Host:import5.RenderComponentType = import3.createRenderComponentType('',0,import6.ViewEncapsulation.None,([] as any[]),{});
class View_DataTableHeaderComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.DataTableHeaderComponent>;
  _DataTableHeaderComponent_0_3:Wrapper_DataTableHeaderComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_DataTableHeaderComponent_Host0,renderType_DataTableHeaderComponent_Host,import7.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'datatable-header',new import3.InlineArray2(2,'class','datatable-header'),rootSelector,(null as any));
    this.compView_0 = new View_DataTableHeaderComponent0(this.viewUtils,this,0,this._el_0);
    this._DataTableHeaderComponent_0_3 = new Wrapper_DataTableHeaderComponent();
    this.compView_0.create(this._DataTableHeaderComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import9.ComponentRef_<any>(0,this,this._el_0,this._DataTableHeaderComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.DataTableHeaderComponent) && (0 === requestNodeIndex))) { return this._DataTableHeaderComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._DataTableHeaderComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this._DataTableHeaderComponent_0_3.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._DataTableHeaderComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const DataTableHeaderComponentNgFactory:import9.ComponentFactory<import0.DataTableHeaderComponent> = new import9.ComponentFactory<import0.DataTableHeaderComponent>('datatable-header',View_DataTableHeaderComponent_Host0,import0.DataTableHeaderComponent);
const styles_DataTableHeaderComponent:any[] = ([] as any[]);
class View_DataTableHeaderComponent2 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import10.DataTableHeaderCellComponent>;
  _DraggableDirective_0_3:import11.Wrapper_DraggableDirective;
  _ResizeableDirective_0_4:import12.Wrapper_ResizeableDirective;
  _LongPressDirective_0_5:import13.Wrapper_LongPressDirective;
  _DataTableHeaderCellComponent_0_6:import14.Wrapper_DataTableHeaderCellComponent;
  _text_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import15.ViewContainer) {
    super(View_DataTableHeaderComponent2,renderType_DataTableHeaderComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'datatable-header-cell',new import3.InlineArray8(8,'draggable','','long-press','','resizeable','','title',''),(null as any));
    this.compView_0 = new import14.View_DataTableHeaderCellComponent0(this.viewUtils,this,0,this._el_0);
    this._DraggableDirective_0_3 = new import11.Wrapper_DraggableDirective(new import16.ElementRef(this._el_0));
    this._ResizeableDirective_0_4 = new import12.Wrapper_ResizeableDirective(new import16.ElementRef(this._el_0));
    this._LongPressDirective_0_5 = new import13.Wrapper_LongPressDirective();
    this._DataTableHeaderCellComponent_0_6 = new import14.Wrapper_DataTableHeaderCellComponent();
    this._text_1 = this.renderer.createText((null as any),'\n        ',(null as any));
    this.compView_0.create(this._DataTableHeaderCellComponent_0_6.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray16(12,'resize',(null as any),'longPress',(null as any),'longPressEnd',(null as any),'sort',(null as any),'select',(null as any),'mousedown',(null as any)),this.eventHandler(this.handleEvent_0));
    this._ResizeableDirective_0_4.subscribe(this,this.eventHandler(this.handleEvent_0),true);
    this._LongPressDirective_0_5.subscribe(this,this.eventHandler(this.handleEvent_0),true,false,true);
    this._DataTableHeaderCellComponent_0_6.subscribe(this,this.eventHandler(this.handleEvent_0),true,true);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.DraggableDirective) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._DraggableDirective_0_3.context; }
    if (((token === import18.ResizeableDirective) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._ResizeableDirective_0_4.context; }
    if (((token === import19.LongPressDirective) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._LongPressDirective_0_5.context; }
    if (((token === import10.DataTableHeaderCellComponent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._DataTableHeaderCellComponent_0_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.context.$implicit;
    this._DraggableDirective_0_3.check_dragModel(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = ((this.parentView.parentView.context.reorderable && this.context.$implicit.draggable) && this.parentView.parentView.context.drag);
    this._DraggableDirective_0_3.check_dragX(currVal_0_0_1,throwOnChange,false);
    const currVal_0_0_2:any = false;
    this._DraggableDirective_0_3.check_dragY(currVal_0_0_2,throwOnChange,false);
    this._DraggableDirective_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_0_1_0:any = this.context.$implicit.resizeable;
    this._ResizeableDirective_0_4.check_resizeEnabled(currVal_0_1_0,throwOnChange,false);
    this._ResizeableDirective_0_4.ngDoCheck(this,this._el_0,throwOnChange);
    this._LongPressDirective_0_5.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_0_3_0:any = this.parentView.parentView.context.sortType;
    this._DataTableHeaderCellComponent_0_6.check_sortType(currVal_0_3_0,throwOnChange,false);
    const currVal_0_3_1:any = this.context.$implicit;
    this._DataTableHeaderCellComponent_0_6.check_column(currVal_0_3_1,throwOnChange,false);
    const currVal_0_3_2:any = this.parentView.parentView.context.sortAscendingIcon;
    this._DataTableHeaderCellComponent_0_6.check_sortAscendingIcon(currVal_0_3_2,throwOnChange,false);
    const currVal_0_3_3:any = this.parentView.parentView.context.sortDescendingIcon;
    this._DataTableHeaderCellComponent_0_6.check_sortDescendingIcon(currVal_0_3_3,throwOnChange,false);
    const currVal_0_3_4:any = this.parentView.parentView.context.allRowsSelected;
    this._DataTableHeaderCellComponent_0_6.check_allRowsSelected(currVal_0_3_4,throwOnChange,false);
    const currVal_0_3_5:any = this.parentView.parentView.context.selectionType;
    this._DataTableHeaderCellComponent_0_6.check_selectionType(currVal_0_3_5,throwOnChange,false);
    const currVal_0_3_6:any = this.parentView.parentView.context.headerHeight;
    this._DataTableHeaderCellComponent_0_6.check_headerHeight(currVal_0_3_6,throwOnChange,false);
    const currVal_0_3_7:any = this.parentView.parentView.context.sorts;
    this._DataTableHeaderCellComponent_0_6.check_sorts(currVal_0_3_7,throwOnChange,false);
    this._DataTableHeaderCellComponent_0_6.ngDoCheck(this,this._el_0,throwOnChange);
    this._ResizeableDirective_0_4.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    this._LongPressDirective_0_5.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    this._DataTableHeaderCellComponent_0_6.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._ResizeableDirective_0_4.context.ngAfterViewInit(); } }
  }
  dirtyParentQueriesInternal():void {
    (<View_DataTableHeaderComponent0>this.parentView.parentView)._query_DraggableDirective_1_0.setDirty();
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._DraggableDirective_0_3.ngOnDestroy();
    this._ResizeableDirective_0_4.ngOnDestroy();
    this._LongPressDirective_0_5.ngOnDestroy();
    this._DataTableHeaderCellComponent_0_6.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DraggableDirective_0_3.handleEvent(eventName,$event) && result);
    result = (this._ResizeableDirective_0_4.handleEvent(eventName,$event) && result);
    result = (this._LongPressDirective_0_5.handleEvent(eventName,$event) && result);
    if ((eventName == 'resize')) {
      const pd_sub_0:any = ((<any>this.parentView.parentView.context.onColumnResized($event,this.context.$implicit)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'longPress')) {
      const pd_sub_1:any = ((<any>(this.parentView.parentView.context.drag = true)) !== false);
      result = (pd_sub_1 && result);
    }
    if ((eventName == 'longPressEnd')) {
      const pd_sub_2:any = ((<any>(this.parentView.parentView.context.drag = false)) !== false);
      result = (pd_sub_2 && result);
    }
    if ((eventName == 'sort')) {
      const pd_sub_3:any = ((<any>this.parentView.parentView.context.onSort($event)) !== false);
      result = (pd_sub_3 && result);
    }
    if ((eventName == 'select')) {
      const pd_sub_4:any = ((<any>this.parentView.parentView.context.select.emit($event)) !== false);
      result = (pd_sub_4 && result);
    }
    return result;
  }
}
class View_DataTableHeaderComponent1 extends import2.AppView<any> {
  _el_0:any;
  _NgStyle_0_3:import20.Wrapper_NgStyle;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _vc_2:import15.ViewContainer;
  _TemplateRef_2_5:any;
  _NgFor_2_6:import21.Wrapper_NgFor;
  _text_3:any;
  /*private*/ _expr_8:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import15.ViewContainer) {
    super(View_DataTableHeaderComponent1,renderType_DataTableHeaderComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_8 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._NgStyle_0_3 = new import20.Wrapper_NgStyle(this.parentView.parentView.injectorGet(import22.KeyValueDiffers,this.parentView.parentIndex),new import16.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_2 = new import15.ViewContainer(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import23.TemplateRef_(this,2,this._anchor_2);
    this._NgFor_2_6 = new import21.Wrapper_NgFor(this._vc_2.vcRef,this._TemplateRef_2_5,this.parentView.parentView.injectorGet(import24.IterableDiffers,this.parentView.parentIndex),this.parentView.ref);
    this._text_3 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import23.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import25.NgFor) && (2 === requestNodeIndex))) { return this._NgFor_2_6.context; }
    if (((token === import26.NgStyle) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._NgStyle_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.parentView.context.stylesByGroup(this.context.$implicit.type);
    this._NgStyle_0_3.check_ngStyle(currVal_0_0_0,throwOnChange,false);
    this._NgStyle_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_2_0_0:any = this.context.$implicit.columns;
    this._NgFor_2_6.check_ngForOf(currVal_2_0_0,throwOnChange,false);
    const currVal_2_0_1:any = this.parentView.context.columnTrackingFn;
    this._NgFor_2_6.check_ngForTrackBy(currVal_2_0_1,throwOnChange,false);
    this._NgFor_2_6.ngDoCheck(this,this._anchor_2,throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
    const currVal_8:any = ('datatable-row-' + this.context.$implicit.type);
    if (import3.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementProperty(this._el_0,'className',currVal_8);
      this._expr_8 = currVal_8;
    }
  }
  destroyInternal():void {
    this._vc_2.destroyNestedViews();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 2)) { return new View_DataTableHeaderComponent2(this.viewUtils,this,2,this._anchor_2,this._vc_2); }
    return (null as any);
  }
}
var renderType_DataTableHeaderComponent:import5.RenderComponentType = import3.createRenderComponentType('',0,import6.ViewEncapsulation.None,styles_DataTableHeaderComponent,{});
export class View_DataTableHeaderComponent0 extends import2.AppView<import0.DataTableHeaderComponent> {
  _text_0:any;
  _el_1:any;
  _OrderableDirective_1_3:import27.Wrapper_OrderableDirective;
  _query_DraggableDirective_1_0:import28.QueryList<any>;
  _text_2:any;
  _anchor_3:any;
  /*private*/ _vc_3:import15.ViewContainer;
  _TemplateRef_3_5:any;
  _NgFor_3_6:import21.Wrapper_NgFor;
  _text_4:any;
  _text_5:any;
  /*private*/ _expr_11:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_DataTableHeaderComponent0,renderType_DataTableHeaderComponent,import7.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways);
    this._expr_11 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray4(4,'class','datatable-header-inner','orderable',''),(null as any));
    this._OrderableDirective_1_3 = new import27.Wrapper_OrderableDirective(this.parentView.injectorGet(import22.KeyValueDiffers,this.parentIndex));
    this._query_DraggableDirective_1_0 = new import28.QueryList<any>();
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._vc_3 = new import15.ViewContainer(3,1,this,this._anchor_3);
    this._TemplateRef_3_5 = new import23.TemplateRef_(this,3,this._anchor_3);
    this._NgFor_3_6 = new import21.Wrapper_NgFor(this._vc_3.vcRef,this._TemplateRef_3_5,this.parentView.injectorGet(import24.IterableDiffers,this.parentIndex),this.ref);
    this._text_4 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_5 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_1,new import3.InlineArray2(2,'reorder',(null as any)),this.eventHandler(this.handleEvent_1));
    this._OrderableDirective_1_3.subscribe(this,this.eventHandler(this.handleEvent_1),true);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._anchor_3,
      this._text_4,
      this._text_5
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import23.TemplateRef) && (3 === requestNodeIndex))) { return this._TemplateRef_3_5; }
    if (((token === import25.NgFor) && (3 === requestNodeIndex))) { return this._NgFor_3_6.context; }
    if (((token === import29.OrderableDirective) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._OrderableDirective_1_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._OrderableDirective_1_3.ngDoCheck(this,this._el_1,throwOnChange);
    const currVal_3_0_0:any = this.context.columnsByPin;
    this._NgFor_3_6.check_ngForOf(currVal_3_0_0,throwOnChange,false);
    const currVal_3_0_1:any = this.context.trackByGroups;
    this._NgFor_3_6.check_ngForTrackBy(currVal_3_0_1,throwOnChange,false);
    this._NgFor_3_6.ngDoCheck(this,this._anchor_3,throwOnChange);
    this._vc_3.detectChangesInNestedViews(throwOnChange);
    if (!throwOnChange) {
      if (this._query_DraggableDirective_1_0.dirty) {
          this._query_DraggableDirective_1_0.reset([this._vc_3.mapNestedViews(View_DataTableHeaderComponent1,(nestedView:View_DataTableHeaderComponent1):any => {
              return [nestedView._vc_2.mapNestedViews(View_DataTableHeaderComponent2,(nestedView:View_DataTableHeaderComponent2):any => {
                return [nestedView._DraggableDirective_0_3.context];
            })];
        })]);
        this._OrderableDirective_1_3.context.draggables = this._query_DraggableDirective_1_0;
        this._query_DraggableDirective_1_0.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._OrderableDirective_1_3.context.ngAfterContentInit(); }
    }
    const currVal_11:any = this.context.columnGroupWidths.total;
    if (import3.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this.renderer.setElementStyle(this._el_1,'width',((this.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_11) == null)? (null as any): (this.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_11).toString() + 'px')));
      this._expr_11 = currVal_11;
    }
  }
  destroyInternal():void {
    this._vc_3.destroyNestedViews();
    this._OrderableDirective_1_3.ngOnDestroy();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 3)) { return new View_DataTableHeaderComponent1(this.viewUtils,this,3,this._anchor_3,this._vc_3); }
    return (null as any);
  }
  handleEvent_1(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'reorder')) {
      const pd_sub_0:any = ((<any>this.context.onColumnReordered($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}