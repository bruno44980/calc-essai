/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PlageDeCellulesWhereInput } from "./PlageDeCellulesWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class PlageDeCellulesCountArgs {
  @ApiProperty({
    required: false,
    type: () => PlageDeCellulesWhereInput,
  })
  @Field(() => PlageDeCellulesWhereInput, { nullable: true })
  @Type(() => PlageDeCellulesWhereInput)
  where?: PlageDeCellulesWhereInput;
}

export { PlageDeCellulesCountArgs as PlageDeCellulesCountArgs };
