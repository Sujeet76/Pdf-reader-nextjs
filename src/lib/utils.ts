import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

// merge same class name 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
