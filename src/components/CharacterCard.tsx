'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import Image from 'next/image';
import { Suspense } from 'react';
import { GenderFemale, GenderMale } from '@phosphor-icons/react';

import { CharacterProps } from '@/types/CharacterProps';
interface CharacterCardProps {
  characters: CharacterProps[];
}

export default function CharacterCard({ characters }: CharacterCardProps) {
  function getTextColorByHouse(house: any) {
    switch (house) {
      case 'Gryffindor':
        return 'text-red-500';
      case 'Hufflepuff':
        return 'text-yellow-500';
      case 'Ravenclaw':
        return 'text-blue-500';
      case 'Slytherin':
        return 'text-green-500';
      default:
        return 'text-gray-700';
    }
  }

  return (
    <Carousel className="w-full max-w-3xl">
      <CarouselContent>
        {characters.map((character) => (
          <CarouselItem key={character.id}>
            <div className="p-1">
              <Card>
                <CardHeader className="text-center flex justify-center items-center gap-2">
                  <CardTitle className="text-3xl leading-relaxed text-yellow-600">
                    {character.name}
                  </CardTitle>

                  <Image
                    src={character.image}
                    alt={character.name}
                    width={200}
                    height={200}
                    className="rounded-md border"
                    loading="lazy"
                  />
                  <CardDescription>
                    {character.alternate_names.join(', ')}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-start">Species</TableHead>
                        <TableHead className="text-center">Gender</TableHead>
                        <TableHead className="text-center">House</TableHead>
                        <TableHead className="text-center">Patronus</TableHead>
                        <TableHead className="text-center">
                          Hogwarts Student
                        </TableHead>
                        <TableHead className="text-center">
                          Hogwarts Staff
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="text-start">
                          {character.species}
                        </TableCell>
                        <TableCell className="flex justify-center">
                          {character.gender === 'male' ? (
                            <GenderMale size={24} color={'#0ea5e9'} />
                          ) : (
                            <GenderFemale size={24} color={'#d946ef'} />
                          )}
                        </TableCell>
                        <TableCell
                          className={`text-center ${getTextColorByHouse(
                            character.house
                          )}`}
                        >
                          {character.house}
                        </TableCell>
                        <TableCell className="text-center">
                          {character.patronus === ''
                            ? 'N/A'
                            : character.patronus}
                        </TableCell>
                        <TableCell className="text-center">
                          {character.hogwartsStudent === true ? 'Yes' : 'No'}
                        </TableCell>
                        <TableCell className="text-center">
                          {character.hogwartsStaff === true ? 'Yes' : 'No'}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter className="flex justify-center items-center">
                  <p>{character.actor}</p>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
