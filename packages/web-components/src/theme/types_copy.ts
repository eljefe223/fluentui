// import { FontFamilyTokens, FontSizeTokens, FontWeightTokens, LineHeightTokens, StrokeWidthTokens } from "@fluentui/tokens";

// export type NewFontTokens = {
//   fontFamilyBase: string;
// }

// export type NewColorTokens = {

//   colorControlBackgroundListItemIndicatorStrokeRest: string;
//   colorControlBackgroundListItemIndicatorStrokeHover: string;
//   colorControlBackgroundListItemIndicatorStrokePressed: string;
//   colorControlBackgroundListItemIndicatorStrokeDisabled: string;

//   colorControlBackgroundListItemSelectedFillRest: string;
//   colorControlBackgroundListItemSelectedFillHover: string;
//   colorControlBackgroundListItemSelectedFillPressed: string;
//   colorControlBackgroundListItemSelectedFillDisabled: string;

//   colorControlBackgroundListItemSelectedIndicatorFillRest: string;
//   colorControlBackgroundListItemSelectedIndicatorFillHover: string;
//   colorControlBackgroundListItemSelectedIndicatorFillPressed: string;
//   colorControlBackgroundListItemSelectedIndicatorFillDisabled: string;

//   colorControlBackgroundAccentShapeSafeFillRest: string;
//   colorControlBackgroundAccentShapeSafeFillHover: string;
//   colorControlBackgroundAccentShapeSafeFillPressed: string;
//   colorControlBackgroundAccentShapeSafeFillDisabled: string;

//   colorControlBackgroundActiveAccentShapeSafeFillRest: string;
//   colorControlBackgroundActiveAccentShapeSafeFillHover: string;
//   colorControlBackgroundActiveAccentShapeSafeFillPressed: string;
//   colorControlBackgroundActiveAccentShapeSafeFillDisabled: string;

//   colorControlBackgroundDefaultShapeSafeFillRest: string;
//   colorControlBackgroundDefaultShapeSafeFillHover: string;
//   colorControlBackgroundDefaultShapeSafeFillPressed: string;
//   colorControlBackgroundDefaultShapeSafeFillDisabled: string;

//   colorControlBackgroundDefaultSelectedFillRest: string;
//   colorControlBackgroundDefaultSelectedFillHover: string;
//   colorControlBackgroundDefaultSelectedFillPressed: string;
//   colorControlBackgroundDefaultSelectedFillDisabled: string;

//   colorControlBackgroundDefaultSelectedStrokeRest: string;
//   colorControlBackgroundDefaultSelectedStrokeHover: string;
//   colorControlBackgroundDefaultSelectedStrokePressed: string;
//   colorControlBackgroundDefaultSelectedStrokeDisabled: string;

//   colorControlBackgroundDefaultFillRest: string;
//   colorControlBackgroundDefaultFillHover: string;
//   colorControlBackgroundDefaultFillPressed: string;
//   colorControlBackgroundDefaultFillDisabled: string;

//   colorControlBackgroundDefaultStrokeRest: string;
//   colorControlBackgroundDefaultStrokeHover: string;
//   colorControlBackgroundDefaultStrokePressed: string;
//   colorControlBackgroundDefaultStrokeDisabled: string;

//   colorControlBackgroundDefaultBottomStrokeRest: string;
//   colorControlBackgroundDefaultBottomStrokeHover: string;
//   colorControlBackgroundDefaultBottomStrokePressed: string;
//   colorControlBackgroundDefaultBottomStrokeDisabled: string;

//   colorControlBackgroundTextboxFillRest: string;
//   colorControlBackgroundTextboxFillHover: string;
//   colorControlBackgroundTextboxFillPressed: string;
//   colorControlBackgroundTextboxFillDisabled: string;
//   colorControlBackgroundTextboxFillSelected: string;

//   colorControlBackgroundTextboxStrokeRest: string;
//   colorControlBackgroundTextboxStrokeHover: string;
//   colorControlBackgroundTextboxStrokePressed: string;
//   colorControlBackgroundTextboxStrokeDisabled: string;
//   colorControlBackgroundTextboxStrokeSelected: string;

//   colorControlBackgroundTextboxTextboxUnderlineRest: string;
//   colorControlBackgroundTextboxTextboxUnderlineHover: string;
//   colorControlBackgroundTextboxTextboxUnderlinePressed: string;
//   colorControlBackgroundTextboxTextboxUnderlineDisabled: string;
//   colorControlBackgroundTextboxTextboxUnderlineSelected: string;

//   colorControlBackgroundTextboxCursorRest: string;

//   colorControlBackgroundSubtleFillRest: string;
//   colorControlBackgroundSubtleFillHover: string;
//   colorControlBackgroundSubtleFillPressed: string;
//   colorControlBackgroundSubtleFillDisabled: string;

//   colorControlBackgroundSubtleStrokeRest: string;
//   colorControlBackgroundSubtleStrokeHover: string;
//   colorControlBackgroundSubtleStrokePressed: string;
//   colorControlBackgroundSubtleStrokeDisabled: string;

//   colorControlBackgroundSubtleSelectedFillRest: string;
//   colorControlBackgroundSubtleSelectedFillHover: string;
//   colorControlBackgroundSubtleSelectedFillPressed: string;
//   colorControlBackgroundSubtleSelectedFillDisabled: string;

//   colorControlBackgroundAccentFillRest: string;
//   colorControlBackgroundAccentFillHover: string;
//   colorControlBackgroundAccentFillPressed: string;
//   colorControlBackgroundAccentFillDisabled: string;

//   colorControlBackgroundAccentStrokeRest: string;
//   colorControlBackgroundAccentStrokeHover: string;
//   colorControlBackgroundAccentStrokePressed: string;
//   colorControlBackgroundAccentStrokeDisabled: string;

//   colorControlBackgroundAccentSelectedFillRest: string;
//   colorControlBackgroundAccentSelectedFillHover: string;
//   colorControlBackgroundAccentSelectedFillPressed: string;
//   colorControlBackgroundAccentSelectedFillDisabled: string;

//   colorControlBackgroundAccentSelectedStrokeRest: string;
//   colorControlBackgroundAccentSelectedStrokeHover: string;
//   colorControlBackgroundAccentSelectedStrokePressed: string;
//   colorControlBackgroundAccentSelectedStrokeDisabled: string;

//   colorControlBackgroundOutlineSafeFillRest: string;
//   colorControlBackgroundOutlineSafeFillHover: string;
//   colorControlBackgroundOutlineSafeFillPressed: string;
//   colorControlBackgroundOutlineSafeFillDisabled: string;

//   colorControlBackgroundOutlineSafeStrokeRest: string;
//   colorControlBackgroundOutlineSafeStrokeHover: string;
//   colorControlBackgroundOutlineSafeStrokePressed: string;
//   colorControlBackgroundOutlineSafeStrokeDisabled: string;

// // FOREGROUNDS

//   colorControlForegroundOnListItemSelectedRest: string;
//   colorControlForegroundOnListItemSelectedHover: string;
//   colorControlForegroundOnListItemSelectedPressed: string;
//   colorControlForegroundOnListItemSelectedDisabled: string;

//   colorControlForegroundOnListItemSelectedIndicatorRest: string;
//   colorControlForegroundOnListItemSelectedIndicatorHover: string;
//   colorControlForegroundOnListItemSelectedIndicatorPressed: string;
//   colorControlForegroundOnListItemSelectedIndicatorDisabled: string;

//   colorControlForegroundOnListItemIndicatorHover: string;
//   colorControlForegroundOnListItemIndicatorPressed: string;

//   colorControlForegroundOnSubtleSelectedTextRest: string;
//   colorControlForegroundOnSubtleSelectedTextHover: string;
//   colorControlForegroundOnSubtleSelectedTextPressed: string;
//   colorControlForegroundOnSubtleSelectedTextDisabled: string;

//   colorControlForegroundOnSubtleSelectedIconRest: string;
//   colorControlForegroundOnSubtleSelectedIconHover: string;
//   colorControlForegroundOnSubtleSelectedIconPressed: string;
//   colorControlForegroundOnSubtleSelectedIconDisabled: string;

//   colorControlForegroundOnDefaultSelectedRest: string;
//   colorControlForegroundOnDefaultSelectedHover: string;
//   colorControlForegroundOnDefaultSelectedPressed: string;
//   colorControlForegroundOnDefaultSelectedDisabled: string;

//   colorControlForegroundPrimaryRest: string;
//   colorControlForegroundPrimaryHover: string;
//   colorControlForegroundPrimaryPressed: string;
//   colorControlForegroundPrimaryDisabled: string;

//   colorControlForegroundSecondaryRest: string;
//   colorControlForegroundSecondaryHover: string;
//   colorControlForegroundSecondaryPressed: string;
//   colorControlForegroundSecondaryDisabled: string;

//   colorControlForegroundTertiaryRest: string;
//   colorControlForegroundTertiaryHover: string;
//   colorControlForegroundTertiaryPressed: string;
//   colorControlForegroundTertiaryDisabled: string;

//   colorControlForegroundPlaceholderRest: string;
//   colorControlForegroundPlaceholderHover: string;
//   colorControlForegroundPlaceholderPressed: string;
//   colorControlForegroundPlaceholderDisabled: string;

//   colorControlForegroundAccentRest: string;
//   colorControlForegroundAccentHover: string;
//   colorControlForegroundAccentHover2: string;
//   colorControlForegroundAccentPressed: string;
//   colorControlForegroundAccentPressed2: string;
//   colorControlForegroundAccentDisabled: string;

//   colorControlForegroundActiveAccentRest: string;
//   colorControlForegroundActiveAccentHover: string;
//   colorControlForegroundActiveAccentPressed: string;
//   colorControlForegroundActiveAccentDisabled: string;

//   colorControlForegroundLightUpRest: string;
//   colorControlForegroundLightUpHover: string;
//   colorControlForegroundLightUpHover2: string;
//   colorControlForegroundLightUpPressed: string;
//   colorControlForegroundLightUpPressed2: string;
//   colorControlForegroundLightUpDisabled: string;

//   colorControlForegroundOnAccentRest: string;
//   colorControlForegroundOnAccentHover: string;
//   colorControlForegroundOnAccentPressed: string;
//   colorControlForegroundOnAccentDisabled: string;

//   colorControlForegroundOnActiveAccentRest: string;
//   colorControlForegroundOnActiveAccentHover: string;
//   colorControlForegroundOnActiveAccentPressed: string;
//   colorControlForegroundOnActiveAccentDisabled: string;

// //PART

//   colorControlPartFocusStrokeInner: string;
//   colorControlPartFocusStrokeOuter: string;

//   colorControlBackgroundSliderThumbOuterStrokeRest: string;
//   colorControlBackgroundSliderThumbOuterStrokeHover: string;
//   colorControlBackgroundSliderThumbOuterStrokePressed: string;
//   colorControlBackgroundSliderThumbOuterStrokeDisabled: string;

//   colorControlPartSliderThumbInnerRest: string;
//   colorControlPartSliderThumbInnerHover: string;
//   colorControlPartSliderThumbInnerPressed: string;
//   colorControlPartSliderThumbInnerDisabled: string;

//   colorControlPartSliderThumbOuterFillRest: string;
//   colorControlPartSliderThumbOuterFillHover: string;
//   colorControlPartSliderThumbOuterFillPressed: string;
//   colorControlPartSliderThumbOuterFillDisabled: string;

// //INFO STATUS

//   colorInfoStatusForegroundOnTaskAccentPrimary: string;

//   colorInfoStatusBackgroundTaskAccentRest: string;

// //PAGE

//   colorPageBackgroundPrimary: string;
//   colorPageBackgroundSecondary: string;
//   colorPageBackgroundTertiary: string;
//   colorPageBackgroundQuarternary: string;

//   colorPageTextPrimary: string;
//   colorPageTextSecondary: string;
//   colorPageTextDisabled: string;

//   colorPageStrokePrimary: string;
//   colorPageStrokeFlyout: string;

//   colorPageDividerDefault: string;

//   colorPageFlyoutBackgroundPrimary: string;
//   colorPageFlyoutBackgroundSecondary: string;

//   colorPageLayerDefault: string;

//   colorCardPrimaryFillRest: string;
//   colorCardPrimaryFillHover: string;
//   colorCardPrimaryFillPressed: string;
//   colorCardPrimaryFillDisabled: string;

//   colorCardPrimaryStrokeRest: string;
//   colorCardPrimaryStrokeHover: string;
//   colorCardPrimaryStrokePressed: string;
//   colorCardPrimaryStrokeDisabled: string;

//   colorCardSecondaryFillRest: string;
//   colorCardSecondaryFillHover: string;
//   colorCardSecondaryFillPressed: string;
//   colorCardSecondaryFillDisabled: string;

//   colorCardSecondaryStrokeRest: string;
//   colorCardSecondaryStrokeHover: string;
//   colorCardSecondaryStrokePressed: string;
//   colorCardSecondaryStrokeDisabled: string;

//   colorCardTaskAccentFillRest: string;
//   colorCardTaskAccentFillHover: string;
//   colorCardTaskAccentFillPressed: string;
//   colorCardTaskAccentFillDisabled: string;

//   colorCardTaskAccentStrokeRest: string;
//   colorCardTaskAccentStrokeHover: string;
//   colorCardTaskAccentStrokePressed: string;
//   colorCardTaskAccentStrokeDisabled: string;

//   colorIllustrationStroke1: string;
//   colorIllustrationTransparentSurface: string;

//   colorAcrylicFlyoutDefaultColor: string;
//   colorAcrylicFlyoutDefaultLuminosity: string;
// };

// export type NewBorderRadius = {
//   layoutCornerLayerDefault: string;
//   layoutCornerLayerIntersection: string;
//   layoutCornerControlDefaultRest: string;
//   layoutCornerControlDefaultHover: string;
//   layoutCornerControlDefaultPressed: string;
//   layoutCornerControlDefaultDisabled: string;
//   layoutCornerControRadioHover: string;
//   layoutCornerControRadioInnerHover: string;
//   layoutCornerControlCheckboxRest: string;
//   layoutCornerControlCheckboxHover: string;
//   layoutCornerControlCheckboxPressed: string;
//   layoutCornerControlCheckboxDisabled: string;
//   layoutCornerControlSelectorRest: string;
//   layoutCornerCardDefaultRest: string;
//   layoutCornerCardDefaultHover: string;
//   layoutCornerCardDefaultPressed: string;
//   layoutCornerCardDefaultDisabled: string;
//   layoutCornerCardLargeRest: string;
//   layoutCornerCardLargeHover: string;
//   layoutCornerCardLargePressed: string;
//   layoutCornerCardLargeDisabled: string;
//   layoutCornerToolbarDefault: string;
//   layoutCornerTooltipDefault: string;
//   layoutCornerFlyoutRest: string;
//   layoutCornerFlyoutHover: string;
//   layoutCornerFlyoutPressed: string;
//   layoutCornerDialog: string;
//   layoutCornerOSWindowActive: string;
//   layoutCornerOSWindowinactive: string;
//   layoutCornerOSShellDefault: string;
// }

// export type NewControlLayout = {
//   layoutControlButtonDefaultPillHeightRest: string;
//   layoutControlButtonDefaultPillHeightHover: string;
//   layoutControlButtonDefaultPillHeightPressed: string;
//   layoutControlButtonDefaultPillHeightDisabled: string;
//   layoutControlButtonDefaultGapIconToText: string;
//   layoutControlButtonDefaultGapTextToIcon: string;
//   layoutControlButtonDefaultPaddingPaddingVertical: string;
//   layoutControlButtonDefaultPaddingPaddingHorizontal: string;
//   layoutControlButtonDefaultPaddingTextWrapperHorizontal: string;
//   layoutControlButtonLargePaddingTextWrapperVertical: string;
//   layoutControlButtonLargePaddingOuterVertical: string;
//   layoutControlButtonLargePaddingOuterHorizontal: string;
//   layoutControlButtonLargeGapBetweenIconAndText: string;
//   layoutControlButtonStrokeDefaultRest: string;
//   layoutControlButtonStrokeOutlineRest: string;
//   layoutControlButtonStrokeOutlineHover: string;
//   layoutControlButtonStrokeOutlinePressed: string;
//   layoutControlButtonStrokeOutlineDisabled: string;
//   layoutControlTextboxStrokeOutlineRest: string;
//   layoutControlTextboxStrokeOutlineHover: string;
//   layoutControlTextboxStrokeOutlinePressed: string;
//   layoutControlTextboxStrokeOutlineDisabled: string;
//   layoutControlTextboxStrokeOutlineSelected: string;
//   layoutControlTextboxStrokeUnderlineRest: string;
//   layoutControlTextboxStrokeUnderlineHover: string;
//   layoutControlTextboxStrokeUnderlinePressed: string;
//   layoutControlTextboxStrokeUnderlineDisabled: string;
//   layoutControlTextboxStrokeUnderlineSelected: string;
//   layoutControlListItemDefaultPaddingTextWrapperHorizontal: string;
//   layoutControlListItemDefaultPaddingOuterHorizontal: string;
//   layoutControlListItemDefaultPaddingOutervertical: string;
//   layoutControlListItemDefaultGapBetweenSelectors: string;
//   layoutControlListItemDefaultGapBetweenIconAndText: string;
//   layoutControlListItemDefaultFootprintMinWidth: string;
//   layoutControlSliderThumbFootprintDefault: string;
//   layoutControlSliderThumbInnerFootprintRest: string;
//   layoutControlSliderThumbInnerFootprintHover: string;
//   layoutControlSliderThumbInnerFootprintPressed: string;
//   layoutControlSliderThumbInnerFootprintDisabled: string;
//   layoutControlSliderThumbOuterFootprintRest: string;
//   layoutControlSliderThumbOuterFootprintHover: string;
//   layoutControlSliderThumbOuterFootprintPressed: string;
//   layoutControlSliderThumbOuterFootprintDisabled: string;
//   layoutControlSliderThumbOuterStrokeRest: string;
//   layoutControlSliderFootprintHeight: string;
//   layoutControlSwitchFootprintDefault: string;
//   layoutControlSwitchSizeDefault: string;
//   layoutControlSwitchPaddingOuterHorizontal: string;
//   layoutControlSwitchGapControlToLabel: string;
//   layoutControlSwitchThumbFootprintRest: string;
//   layoutControlSwitchThumbFootprintHover: string;
//   layoutControlSwitchThumbFootprintPressed: string;
//   layoutControlSwitchThumbFootprintDisabled: string;
//   layoutControlChatResponseMaxWidth: string;
//   layoutControlLinkStrokeDefaultRest: string;
//   layoutPageNudgeDefault: string;
//   layoutPageGapTextSmall: string;
//   layoutPageGapTextMedium: string;
//   layoutPageGapItem: string;
//   layoutPageGapListItem: string;
//   layoutPageGapContainerXS: string;
//   layoutPageGapContainerSmall: string;
//   layoutPageGapContainerLarge: string;
//   layoutPageGapContainerMedium: string;
//   layoutPageGapContainerXL: string;
//   layoutPageGapNavItem: string;
//   layoutPagePaddingToolbarVertical: string;
//   layoutPagePaddingToolbarHorizontal: string;
//   layoutPagePaddingFlyoutHorizontal: string;
//   layoutPagePaddingFlyoutVertical: string;
//   layoutPagePaddingPageDefaultHorizontal: string;
//   layoutPagePaddingPageDefaultVertical: string;
//   layoutPagePaddingPageMediumHorizontal: string;
//   layoutPagePaddingPageMediumVertical: string;
//   layoutPagePaddingPageLargeHorizontal: string;
//   layoutPagePaddingPageLargeVertical: string;
//   layoutPagePaddingPageXLHorizontal: string;
//   layoutPagePaddingPageXLVertical: string;
// }

// export type ThowAwayForTestingOnly = {
//   stateBorderSize: string;
//   sliderMask: string;
//   textInputFocusBottomBorder: string;
//   controlHeight: string;
//   layoutControlSliderThumbStrokeRest: string;
//   layoutControlSliderThumbStrokeHover: string;
//   layoutControlSliderThumbStrokePressed: string;
//   layoutControlSliderThumbStrokeDisabled: string;
// }

// export type NewTheme = ThowAwayForTestingOnly & NewColorTokens & NewBorderRadius & FontFamilyTokens & FontWeightTokens & LineHeightTokens & FontSizeTokens & StrokeWidthTokens & NewControlLayout;
