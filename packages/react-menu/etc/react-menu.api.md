## API Report File for "@fluentui/react-menu"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { ComponentProps } from '@fluentui/react-utilities';
import { ComponentState } from '@fluentui/react-utilities';
import { ContextSelector } from '@fluentui/react-context-selector';
import { ObjectShorthandProps } from '@fluentui/react-utilities';
import { PositioningProps } from '@fluentui/react-positioning';
import * as React_2 from 'react';
import { ShorthandProps } from '@fluentui/react-utilities';

// @public
export const Menu: React_2.FC<MenuProps>;

// @public
export interface MenuContextValue extends MenuListProps, Pick<MenuState, 'openOnHover' | 'openOnContext' | 'triggerRef' | 'menuPopoverRef' | 'setOpen' | 'isSubmenu' | 'triggerId' | 'hasIcons' | 'hasCheckmarks' | 'persistOnItemClick' | 'inline'> {
    // (undocumented)
    hasMenuContext: boolean;
    // (undocumented)
    open: boolean;
    // (undocumented)
    triggerId: string;
}

// @public
export const MenuDivider: React_2.FunctionComponent<MenuDividerProps & React_2.RefAttributes<HTMLElement>>;

// @public (undocumented)
export type MenuDividerProps = ComponentProps & React_2.HTMLAttributes<HTMLElement>;

// @public (undocumented)
export interface MenuDividerState extends MenuDividerProps {
    // (undocumented)
    ref: React_2.MutableRefObject<HTMLElement>;
}

// @public
export const MenuGroup: React_2.FunctionComponent<MenuGroupProps>;

// @public (undocumented)
export const MenuGroupContextProvider: React_2.Provider<MenuGroupContextValue>;

// @public
export interface MenuGroupContextValue {
    headerId: string;
}

// @public
export const MenuGroupHeader: React_2.FunctionComponent<MenuGroupHeaderProps>;

// @public (undocumented)
export type MenuGroupHeaderProps = ComponentProps & React_2.HTMLAttributes<HTMLElement>;

// @public (undocumented)
export interface MenuGroupHeaderState extends MenuGroupHeaderProps {
    // (undocumented)
    ref: React_2.MutableRefObject<HTMLElement>;
}

// @public (undocumented)
export type MenuGroupProps = ComponentProps & React_2.HTMLAttributes<HTMLElement>;

// @public
export const menuGroupShorthandProps: string[];

// @public (undocumented)
export interface MenuGroupState extends MenuGroupProps {
    headerId: string;
    // (undocumented)
    ref: React_2.MutableRefObject<HTMLElement>;
}

// @public
export const MenuItem: React_2.ForwardRefExoticComponent<MenuItemProps & React_2.RefAttributes<HTMLElement>>;

// @public
export const MenuItemCheckbox: React_2.ForwardRefExoticComponent<MenuItemCheckboxProps & React_2.RefAttributes<HTMLElement>>;

// @public (undocumented)
export interface MenuItemCheckboxProps extends ComponentProps, React_2.HTMLAttributes<HTMLElement>, MenuItemProps, MenuItemSelectableProps {
    checkmark?: ShorthandProps<React_2.HTMLAttributes<HTMLElement>>;
}

// @public
export const menuItemCheckboxShorthandProps: readonly ["icon", "submenuIndicator", "content", "secondaryContent", "checkmark"];

// @public (undocumented)
export interface MenuItemCheckboxState extends MenuItemState, MenuItemSelectableState {
    checkmark: ObjectShorthandProps<React_2.HTMLAttributes<HTMLElement>>;
    // (undocumented)
    ref: React_2.MutableRefObject<HTMLElement>;
}

// @public (undocumented)
export interface MenuItemProps extends ComponentProps, React_2.HTMLAttributes<HTMLElement> {
    checkmark?: ShorthandProps<React_2.HTMLAttributes<HTMLElement>>;
    content?: ShorthandProps<React_2.HTMLAttributes<HTMLElement>>;
    disabled?: boolean;
    hasSubmenu?: boolean;
    icon?: ShorthandProps<React_2.HTMLAttributes<HTMLElement>>;
    persistOnClick?: boolean;
    secondaryContent?: ShorthandProps<React_2.HTMLAttributes<HTMLElement>>;
    submenuIndicator?: ShorthandProps<React_2.HTMLAttributes<HTMLElement>>;
}

// @public
export const MenuItemRadio: React_2.ForwardRefExoticComponent<MenuItemRadioProps & React_2.RefAttributes<HTMLElement>>;

// @public (undocumented)
export interface MenuItemRadioProps extends ComponentProps, React_2.HTMLAttributes<HTMLElement>, MenuItemProps, MenuItemSelectableProps {
    // (undocumented)
    checkmark?: ShorthandProps<React_2.HTMLAttributes<HTMLElement>>;
}

// @public
export const menuItemRadioShorthandProps: readonly ["icon", "submenuIndicator", "content", "secondaryContent", "checkmark"];

// @public (undocumented)
export interface MenuItemRadioState extends MenuItemState, MenuItemSelectableState {
    checkmark: ObjectShorthandProps<React_2.HTMLAttributes<HTMLElement>>;
    // (undocumented)
    ref: React_2.MutableRefObject<HTMLElement>;
}

// @public
export interface MenuItemSelectableProps extends React_2.HTMLAttributes<HTMLElement> {
    disabled?: boolean;
    name: string;
    value: string;
}

// @public
export interface MenuItemSelectableState extends MenuItemSelectableProps {
    checked: boolean;
    checkedItems: string[];
    onCheckedValueChange: (e: React_2.MouseEvent | React_2.KeyboardEvent, name: string, checkedItems: string[]) => void;
}

// @public
export const menuItemShorthandProps: readonly ["icon", "submenuIndicator", "content", "secondaryContent", "checkmark"];

// @public (undocumented)
export interface MenuItemState extends MenuItemProps {
    checkmark: ObjectShorthandProps<React_2.HTMLAttributes<HTMLElement>>;
    content: ObjectShorthandProps<React_2.HTMLAttributes<HTMLElement>>;
    icon?: ObjectShorthandProps<React_2.HTMLAttributes<HTMLSpanElement>>;
    ref: React_2.MutableRefObject<HTMLElement>;
    secondaryContent: ObjectShorthandProps<React_2.HTMLAttributes<HTMLElement>>;
    submenuIndicator?: ObjectShorthandProps<React_2.HTMLAttributes<HTMLElement>>;
}

// @public
export const MenuList: React_2.FunctionComponent<MenuListProps & React_2.RefAttributes<HTMLElement>>;

// @public
export interface MenuListContextValue extends Pick<MenuListProps, 'checkedValues' | 'onCheckedValueChange' | 'hasIcons' | 'hasCheckmarks'> {
    // (undocumented)
    selectRadio?: SelectableHandler;
    // (undocumented)
    setFocusByFirstCharacter?: (e: React_2.KeyboardEvent<HTMLElement>, itemEl: HTMLElement) => void;
    // (undocumented)
    toggleCheckbox?: SelectableHandler;
}

// @public (undocumented)
export interface MenuListProps extends ComponentProps, React_2.HTMLAttributes<HTMLElement> {
    checkedValues?: Record<string, string[]>;
    defaultCheckedValues?: Record<string, string[]>;
    hasCheckmarks?: boolean;
    hasIcons?: boolean;
    onCheckedValueChange?: (e: React_2.MouseEvent | React_2.KeyboardEvent, name: string, checkedItems: string[]) => void;
}

// @public (undocumented)
export const MenuListProvider: React_2.Provider<MenuListContextValue> & React_2.FC<React_2.ProviderProps<MenuListContextValue>>;

// @public (undocumented)
export interface MenuListState extends MenuListProps {
    ref: React_2.MutableRefObject<HTMLElement>;
    selectRadio: SelectableHandler;
    setFocusByFirstCharacter: MenuListContextValue['setFocusByFirstCharacter'];
    // (undocumented)
    toggleCheckbox: SelectableHandler;
}

// @public
export interface MenuOpenChangeData extends Pick<MenuState, 'open'> {
    bubble?: boolean;
    keyboard?: boolean;
}

// @public
export type MenuOpenEvents = MouseEvent | TouchEvent | React_2.MouseEvent<HTMLElement> | React_2.KeyboardEvent<HTMLElement> | React_2.FocusEvent<HTMLElement>;

// @public
export const MenuPopover: React_2.ForwardRefExoticComponent<MenuPopoverProps & React_2.RefAttributes<HTMLElement>>;

// @public
export interface MenuPopoverProps extends ComponentProps, React_2.HTMLAttributes<HTMLElement> {
    // (undocumented)
    children: React_2.ReactNode;
}

// @public
export interface MenuPopoverState extends ComponentState<MenuPopoverProps>, Pick<MenuState, 'inline' | 'isSubmenu'> {
    ref: React_2.Ref<HTMLElement>;
}

// @public
export interface MenuProps extends MenuListProps, Pick<PositioningProps, 'position' | 'align' | 'coverTarget' | 'offset'> {
    children: [JSX.Element, JSX.Element];
    defaultOpen?: boolean;
    inline?: boolean;
    menuPopup?: ShorthandProps<React_2.HTMLAttributes<HTMLElement>>;
    onOpenChange?: (e: MenuOpenEvents, data: MenuOpenChangeData) => void;
    open?: boolean;
    openOnContext?: boolean;
    // (undocumented)
    openOnHover?: boolean;
}

// @public (undocumented)
export const MenuProvider: React_2.Provider<MenuContextValue> & React_2.FC<React_2.ProviderProps<MenuContextValue>>;

// @public (undocumented)
export const menuShorthandProps: (keyof MenuProps)[];

// @public (undocumented)
export interface MenuState extends MenuProps {
    isSubmenu: boolean;
    menuPopover: React_2.ReactNode;
    menuPopoverRef: React_2.MutableRefObject<HTMLElement>;
    menuTrigger: React_2.ReactNode;
    open: boolean;
    persistOnItemClick?: boolean;
    ref: React_2.MutableRefObject<HTMLElement>;
    setOpen: (e: MenuOpenEvents, data: MenuOpenChangeData) => void;
    triggerId: string;
    triggerRef: React_2.MutableRefObject<HTMLElement>;
}

// @public
export const MenuTrigger: React_2.FunctionComponent<MenuTriggerProps & React_2.RefAttributes<HTMLElement>>;

// @public
export interface MenuTriggerChildProps extends Required<Pick<React_2.HTMLAttributes<HTMLElement>, 'onClick' | 'onMouseEnter' | 'onContextMenu' | 'onKeyDown' | 'onBlur' | 'aria-haspopup' | 'aria-expanded' | 'id'>> {
}

// @public (undocumented)
export const MenuTriggerContextProvider: React_2.Provider<boolean>;

// @public (undocumented)
export interface MenuTriggerProps {
    children: React_2.ReactElement;
}

// @public (undocumented)
export const menuTriggerShorthandProps: (keyof MenuTriggerProps)[];

// @public (undocumented)
export interface MenuTriggerState extends MenuTriggerProps {
    ref: React_2.MutableRefObject<HTMLElement>;
}

// @public
export const renderMenu: (state: MenuState) => JSX.Element;

// @public
export const renderMenuDivider: (state: MenuDividerState) => JSX.Element;

// @public
export const renderMenuGroup: (state: MenuGroupState) => JSX.Element;

// @public
export const renderMenuGroupHeader: (state: MenuGroupHeaderState) => JSX.Element;

// @public
export const renderMenuItem: (state: MenuItemState) => JSX.Element;

// @public
export const renderMenuItemCheckbox: (state: MenuItemCheckboxState) => JSX.Element;

// @public
export const renderMenuItemRadio: (state: MenuItemRadioState) => JSX.Element;

// @public
export const renderMenuList: (state: MenuListState) => JSX.Element;

// @public
export const renderMenuPopover: (state: MenuPopoverState) => JSX.Element;

// @public
export const renderMenuTrigger: (state: MenuTriggerState) => JSX.Element;

// @public (undocumented)
export type SelectableHandler = (e: React_2.MouseEvent | React_2.KeyboardEvent, name: string, value: string, checked: boolean) => void;

// @public
export const useCheckmarkStyles: (state: MenuItemSelectableState & {
    checkmark: ObjectShorthandProps<React_2.HTMLAttributes<HTMLElement>>;
}) => void;

// @public
export const useMenu: (props: MenuProps, defaultProps?: MenuProps | undefined) => MenuState;

// @public (undocumented)
export const useMenuContext: <T>(selector: ContextSelector<MenuContextValue, T>) => T;

// @public
export const useMenuDivider: (props: MenuDividerProps, ref: React_2.Ref<HTMLElement>, defaultProps?: MenuDividerProps | undefined) => MenuDividerState;

// @public (undocumented)
export const useMenuDividerStyles: (state: MenuDividerState) => MenuDividerState;

// @public
export function useMenuGroup(props: MenuGroupProps, ref: React_2.Ref<HTMLElement>, defaultProps?: MenuGroupProps): MenuGroupState;

// @public (undocumented)
export const useMenuGroupContext: () => MenuGroupContextValue;

// @public
export function useMenuGroupHeader(props: MenuGroupHeaderProps, ref: React_2.Ref<HTMLElement>, defaultProps?: MenuGroupHeaderProps): MenuGroupHeaderState;

// @public (undocumented)
export const useMenuGroupHeaderStyles: (state: MenuGroupHeaderState) => MenuGroupHeaderState;

// @public
export const useMenuItem: (props: MenuItemProps, ref: React_2.Ref<HTMLElement>, defaultProps?: MenuItemProps | undefined) => MenuItemState;

// @public
export const useMenuItemCheckbox: (props: MenuItemCheckboxProps, ref: React_2.Ref<HTMLElement>, defaultProps?: MenuItemCheckboxProps | undefined) => MenuItemCheckboxState;

// @public
export const useMenuItemRadio: (props: MenuItemRadioProps, ref: React_2.Ref<HTMLElement>, defaultProps?: MenuItemRadioProps | undefined) => MenuItemRadioState;

// @public
export const useMenuItemStyles: (state: MenuItemState) => void;

// @public
export const useMenuList: (props: MenuListProps, ref: React_2.Ref<HTMLElement>, defaultProps?: MenuListProps | undefined) => MenuListState;

// @public (undocumented)
export const useMenuListContext: <T>(selector: ContextSelector<MenuListContextValue, T>) => T;

// @public
export const useMenuPopover: (props: MenuPopoverProps, ref: React_2.Ref<HTMLElement>, defaultProps?: MenuPopoverProps | undefined) => MenuPopoverState;

// @public
export const useMenuTrigger: (props: MenuTriggerProps, ref: React_2.Ref<HTMLElement>, defaultProps?: MenuTriggerProps | undefined) => MenuTriggerState;

// @public (undocumented)
export const useMenuTriggerContext: () => boolean;


// (No @packageDocumentation comment for this package)

```