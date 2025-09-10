import {Directive, HostListener, HostBinding } from '@angular/core';

@Directive({ // Dies ist der Decorator, der die Klasse als Directive konfiguriert.
  selector: '[appHighlight]', // Definiert, wie die Directive im HTML-Code verwendet wird – in diesem Fall als Attribut namens appHighlight
  standalone: true // Markiert die Directive als eigenständig, was bedeutet, dass sie ohne die Deklaration in einem NgModule verwendet werden kann.
})
export class HighlightDirective { //  Dies definiert die Directive-Klasse, die die Logik für das Hervorheben enthält.
  
  @HostBinding('class.isHover') isHovered: boolean = false; // Bindet die Eigenschaft isHovered der Klasse an die CSS-Klasse is-hovered. Wenn isHovered true ist, wird die Klasse is-hovered zum Element hinzugefügt, andernfalls wird sie entfernt.

  @HostListener('mouseenter') onMouseEnter() { // das mouseenter-Event (wenn die Maus über das Element fährt).
    this.isHovered = true; // Setzt die gebundene Eigenschaft auf true, wodurch die CSS-Klasse is-hovered angewendet wird.
  }

  @HostListener('mouseleave') onMouseLeave() { // das mouseenter-Event (wenn die Maus über das Element verlässt).
    this.isHovered = false; // Setzt die gebundene Eigenschaft auf false, wodurch die CSS-Klasse is-hovered wieder entfernt wird.
  }
}
