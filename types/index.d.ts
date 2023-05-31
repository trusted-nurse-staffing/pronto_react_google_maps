// TypeScript Version: 2.3

declare module "react-google-maps" {
  export {
    default as withGoogleMap,
    WithGoogleMapProps,
  } from "react-google-maps/lib/withGoogleMap"
  export {
    default as withScriptjs,
    WithScriptjsProps,
  } from "react-google-maps/lib/withScriptjs"

  export {
    default as Circle,
    CircleProps,
  } from "react-google-maps/lib/components/Circle"
  export {
    default as Marker,
    MarkerProps,
  } from "react-google-maps/lib/components/Marker"
}

declare module "react-google-maps/lib/withGoogleMap" {
  import { ComponentClass, ReactElement, FunctionComponent } from "react"

  export interface WithGoogleMapProps {
    containerElement: ReactElement<any>
    mapElement: ReactElement<any>
  }

  export default function withGoogleMap<P>(
    wrappedComponent: string | ComponentClass<P> | FunctionComponent<P>
  ): ComponentClass<P & WithGoogleMapProps>
}

declare module "react-google-maps/lib/withScriptjs" {
  import { ComponentClass, ReactElement } from "react"

  export interface WithScriptjsProps {
    googleMapURL: string
    loadingElement: ReactElement<any>
  }

  export default function withScriptjs<P>(
    wrappedComponent: ComponentClass<P>
  ): ComponentClass<P & WithScriptjsProps>
}

declare module "react-google-maps/lib/components/Circle" {
  import { Component } from "react"

  export interface CircleProps {
    defaultCenter?: google.maps.LatLng | google.maps.LatLngLiteral
    defaultDraggable?: boolean
    defaultEditable?: boolean
    defaultOptions?: google.maps.CircleOptions
    defaultRadius?: number
    defaultVisible?: boolean
    center?: google.maps.LatLng | google.maps.LatLngLiteral
    draggable?: boolean
    editable?: boolean
    options?: google.maps.CircleOptions
    radius?: number
    visible?: boolean

    onCenterChanged?(): void
    onClick?(e: google.maps.MouseEvent): void
    onDrag?(e: google.maps.MouseEvent): void
    onDblClick?(e: google.maps.MouseEvent): void
    onDragEnd?(e: google.maps.MouseEvent): void
    onDragStart?(e: google.maps.MouseEvent): void
    onMouseDown?(e: google.maps.MouseEvent): void
    onMouseMove?(e: google.maps.MouseEvent): void
    onMouseOut?(e: google.maps.MouseEvent): void
    onMouseOver?(e: google.maps.MouseEvent): void
    onMouseUp?(e: google.maps.MouseEvent): void
    onRadiusChanged?(): void
    onRightClick?(e: google.maps.MouseEvent): void
  }

  export default class Circle extends Component<CircleProps> {
    getBounds(): google.maps.LatLngBounds
    getCenter(): google.maps.LatLng
    getDraggable(): boolean
    getEditable(): boolean
    getRadius(): number
    getVisible(): boolean
  }
}

declare module "react-google-maps/lib/components/GoogleMap" {
  import { Component } from "react"

  export interface GoogleMapProps {
    defaultCenter?: google.maps.LatLng | google.maps.LatLngLiteral
    defaultClickableIcons?: boolean
    defaultHeading?: number
    defaultMapTypeId?: google.maps.MapTypeId | string
    defaultOptions?: google.maps.MapOptions
    defaultStreetView?: google.maps.StreetViewPanorama
    defaultTilt?: number
    defaultZoom?: number
    center?: google.maps.LatLng | google.maps.LatLngLiteral
    clickableIcons?: boolean
    heading?: number
    mapTypeId?: google.maps.MapTypeId | string
    options?: google.maps.MapOptions
    streetView?: google.maps.StreetViewPanorama
    tilt?: number
    zoom?: number

    onBoundsChanged?(): void
    onCenterChanged?(): void
    onClick?(e: google.maps.MouseEvent | google.maps.IconMouseEvent): void
    onDblClick?(e: google.maps.MouseEvent): void
    onDrag?(): void
    onDragEnd?(): void
    onDragStart?(): void
    onHeadingChanged?(): void
    onIdle?(): void
    onMapTypeIdChanged?(): void
    onMouseMove?(e: google.maps.MouseEvent): void
    onMouseOut?(e: google.maps.MouseEvent): void
    onMouseOver?(e: google.maps.MouseEvent): void
    onProjectionChanged?(): void
    onResize?(): void
    onRightClick?(e: google.maps.MouseEvent): void
    onTilesLoaded?(): void
    onTiltChanged?(): void
    onZoomChanged?(): void
  }

  export default class GoogleMap extends Component<GoogleMapProps> {
    fitBounds(
      bounds: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral
    ): void
    panBy(x: number, y: number): void
    panTo(latLng: google.maps.LatLng | google.maps.LatLngLiteral): void
    panToBounds(
      latLngBounds: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral
    ): void
    getBounds(): google.maps.LatLngBounds
    getCenter(): google.maps.LatLng
    getClickableIcons(): boolean
    getDiv(): Element
    getHeading(): number
    getMapTypeId(): google.maps.MapTypeId | string
    getProjection(): google.maps.Projection
    getStreetView(): google.maps.StreetViewPanorama
    getTilt(): number
    getZoom(): number
  }
}

declare module "react-google-maps/lib/components/Marker" {
  import { Component } from "react"

  export interface MarkerProps {
    defaultAnimation?: google.maps.Animation
    defaultClickable?: boolean
    defaultCursor?: string
    defaultDraggable?: boolean
    defaultIcon?: string | google.maps.Icon | google.maps.Symbol
    defaultLabel?: google.maps.MarkerLabel
    defaultOpacity?: number
    defaultOptions?: google.maps.MarkerOptions
    defaultPlace?: google.maps.Place
    defaultPosition?: google.maps.LatLng | google.maps.LatLngLiteral
    defaultShape?: google.maps.MarkerShape
    defaultTitle?: string
    defaultVisible?: boolean
    defaultZIndex?: number
    animation?: google.maps.Animation
    attribution?: google.maps.Attribution
    clickable?: boolean
    cursor?: string
    draggable?: boolean
    icon?: string | google.maps.Icon | google.maps.Symbol
    label?: google.maps.MarkerLabel
    opacity?: number
    options?: google.maps.MarkerOptions
    place?: google.maps.Place
    position?: google.maps.LatLng | google.maps.LatLngLiteral
    shape?: google.maps.MarkerShape
    title?: string
    visible?: boolean
    zIndex?: number

    onAnimationChanged?(): void
    onClick?(e: google.maps.MouseEvent): void
    onClickableChanged?(): void
    onCursorChanged?(): void
    onDblClick?(e: google.maps.MouseEvent): void
    onDrag?(e: google.maps.MouseEvent): void
    onDraggableChanged?(): void
    onDragEnd?(e: google.maps.MouseEvent): void
    onDragStart?(e: google.maps.MouseEvent): void
    onFlatChanged?(): void
    onIconChanged?(): void
    onMouseDown?(e: google.maps.MouseEvent): void
    onMouseOut?(e: google.maps.MouseEvent): void
    onMouseOver?(e: google.maps.MouseEvent): void
    onMouseUp?(e: google.maps.MouseEvent): void
    onPositionChanged?(): void
    onRightClick?(e: google.maps.MouseEvent): void
    onShapeChanged?(): void
    onTitleChanged?(): void
    onVisibleChanged?(): void
    onZindexChanged?(): void

    // MarkerClustererPlus
    noRedraw?: boolean

    // MarkerWithLabel
    markerWithLabel?(): void
    labelClass?: string
    labelAnchor?: google.maps.Point
    labelContent?: string
    labelStyle?: CSSStyleDeclaration
  }

  export default class Marker extends Component<MarkerProps> {
    getAnimation(): google.maps.Animation
    getClickable(): boolean
    getCursor(): string
    getDraggable(): boolean
    getIcon(): string | google.maps.Icon | google.maps.Symbol
    getLabel(): google.maps.MarkerLabel
    getOpacity(): number
    getPlace(): google.maps.Place
    getPosition(): google.maps.LatLng
    getShape(): google.maps.MarkerShape
    getTitle(): string
    getVisible(): boolean
    getZIndex(): number
  }
}
