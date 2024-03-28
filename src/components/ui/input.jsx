import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type,formState, ...rest }, ref) => {
  const {formState:_, ...props} = rest
  return (
    (<input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-6 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
