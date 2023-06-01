import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Failed = () => {
    return (
        <div className="min-h-[450px] flex items-center text-white">
            <Wrapper>
                <div className="max-w-[600px] rounded-lg p-5 border border-white mx-auto flex flex-col">
                    <div className="text-2xl font-bold">Payment failed!</div>
                    <div className="text-base mt-5">
                        For any product related query, drop an email to
                    </div>
                    <div className="underline">contactartstore123@gmail.com</div>

                    <Link href="/" className="font-bold mt-10 py-3 bg-green-600 text-black rounded text-center hover:text-white">
                        Continue Shopping 
                    </Link>
                </div>
            </Wrapper>
        </div>
    );
};

export default Failed;