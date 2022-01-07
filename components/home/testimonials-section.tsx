import {Avatar, Box, Button, HStack, Spacer, Text, useToken, VStack} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import {SectionComponentProps, SectionWrapper} from "../core/section-wrapper";
import numeral from "numeral";
import {useWindowSize} from "../../utils/hooks/use-window-size";

type Testimonial = {
	avatarSrc: string;
	firstName: string;
	lastName: string;
	revenue: number;
	testimony: string;
};

const testimonials: Testimonial[] = [
	{
		avatarSrc: "https://picsum.photos/64",
		firstName: "Kaycee",
		lastName: "Ortiz",
		revenue: 100_000,
		testimony:
			"Setting up my portfolio with Fiber took no more than 10 minutes. Since then, my portfolio has attracted a lot of clients and made me more than $100k.",
	},
	{
		avatarSrc: "https://picsum.photos/64",
		firstName: "Noemi",
		lastName: "DuBuque",
		revenue: 20_000,
		testimony:
			"I have been gettingA LOT of leads ever since I used Fiber's premade templates, now I just need to work on my case studies and I'll be ready to go!",
	},
	{
		avatarSrc: "https://picsum.photos/64",
		firstName: "Cecile",
		lastName: "Hahn",
		revenue: 30_000,
		testimony:
			"I only just started freelancing yesterday but I have already made more than I ever did in my full-time job. The templates are so amazing.",
	},
	{
		avatarSrc: "https://picsum.photos/64",
		firstName: "Berneice",
		lastName: "Carter",
		revenue: 45_000,
		testimony:
			"I only just started freelancing yesterday but I have already made more than I ever did in my full-time job. The templates are so amazing.",
	},
];

export const TestimonialsSection = (props: SectionComponentProps) => {
	const [sectionWrapperMaxWInRem] = useToken("sizes", ["5xl"]);
	const size = useWindowSize();

	return (
		<SectionWrapper {...props._wrapper} overflow="hidden">
			<HStack
				overflowY="auto"
				spacing={8}
				alignItems="stretch"
				mr={`calc((${size.width}px - ${sectionWrapperMaxWInRem}) / 2 * -1)`}
				pr={`calc((${size.width}px - ${sectionWrapperMaxWInRem}) / 2)`}
				sx={{
					// Hide scrollbar
					"::-webkit-scrollbar": {display: "none"}, // Safari and Chrome
					"scrollbar-width": "none", // Firefox
					"-ms-overflow-style": "none", // IE 10+
				}}>
				{testimonials.map((testimonial) => (
					<Box key={testimonial.lastName} p={6} minW="sm" borderWidth={1} borderColor="gray.200" borderRadius="md">
						<VStack align="flex-start" spacing={3} h="full">
							<HStack spacing={3}>
								<Avatar src={testimonial.avatarSrc} alt="avatar" />
								<Box>
									<Text fontWeight="bold" color="brand.500">
										{testimonial.firstName} {testimonial.lastName}
									</Text>
									<Text fontSize="sm">${numeral(testimonial.revenue).format("0a")} in revenue</Text>
								</Box>
							</HStack>
							<Text lineHeight="1.75">{testimonial.testimony}</Text>
							<Spacer />
							<Button width="full" variant="outline" size="sm">
								View {testimonial.firstName}&apos;s Portfolio
							</Button>
						</VStack>
					</Box>
				))}
			</HStack>
		</SectionWrapper>
	);
};
