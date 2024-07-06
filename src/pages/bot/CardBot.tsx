import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import { Input } from "@/components/ui/input";
  

export default function CardBot() {
    return (
        <div className="flex justify-center mt-10">
            <Card className="w-1/3 py-10">
                <CardContent className="flex flex-col w-full justify-center">
                        <div className="flex justify-center">
                        <img
                            className="w-[200px] h-[200x] rounded-full"
                            src="./cid.png"
                            alt=""
                        />
                        </div>
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label>Choose Type CID</Label>
                                    <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Type CID" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="light">Level 1</SelectItem>
                                        <SelectItem value="dark">Level 5</SelectItem>
                                        <SelectItem value="system">Level 10</SelectItem>
                                    </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Amount</Label>
                                    <Input />
                                </div>

                            </div>
                            <div>
                                <Button>Buy</Button>
                            </div>
                        </div>
                </CardContent>
            </Card>
        </div>
    )
}